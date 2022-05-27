import { Box, Button, Paper, Typography } from '@mui/material';
import { FC, useRef, useCallback } from 'react';
import SVG from 'react-inlinesvg';
import { useRecoilValue } from 'recoil';
import {
    borderColorState,
    borderRadiusState,
    borderSizeState,
    svgSizeState,
    svgSpacingXState,
    svgSpacingYState,
    svgState,
} from '../../App';
import { toSvg } from 'html-to-image';

export const Preview: FC = () => {
    const svgs = useRecoilValue(svgState);
    const svgSize = useRecoilValue(svgSizeState);
    const svgSpacingX = useRecoilValue(svgSpacingXState);
    const svgSpacingY = useRecoilValue(svgSpacingYState);
    const boxBorderColor = useRecoilValue(borderColorState);
    const boxBorderSize = useRecoilValue(borderSizeState);
    const boxBorderRadius = useRecoilValue(borderRadiusState);

    const svgDirectory = `${process.env.PUBLIC_URL}/svgs/`;

    const imageRef = useRef<HTMLDivElement>(null);

    const downloadPng = useCallback(() => {
        if (imageRef.current === null) {
            return;
        }
        toSvg(imageRef?.current, { cacheBust: true })
            .then((dataUrl) => {
                var link = document.createElement('a');
                link.download = 'stackshot.svg';
                link.href = dataUrl;
                link.click();
            })
            .catch((err) => {
                console.log(err);
            });
    }, [imageRef]);

    return (
        <Box>
            {/* Preview Header */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
                mb={3}
            >
                <Typography variant="h5" component="div">
                    Preview
                </Typography>
                <Button variant="outlined" onClick={() => downloadPng()}>
                    Download Svg
                </Button>
            </Box>

            {/* Preview Image */}
            <Paper sx={{ p: 5 }} elevation={3}>
                <Box
                    ref={imageRef}
                    style={{
                        width: 'fit-content',
                        background: 'rgba(0, 0, 0, 0)',
                        margin: 0,
                        lineHeight: '0',
                        border: `${boxBorderSize}px solid ${boxBorderColor}`,
                        borderRadius: `${boxBorderRadius}px`,
                    }}
                >
                    {svgs &&
                        svgs.map((fileName: string, index: number) => (
                            <SVG
                                src={`${svgDirectory}${fileName}.svg`}
                                width={svgSize}
                                height={svgSize}
                                style={{
                                    padding: `${svgSpacingY} ${svgSpacingX}`,
                                }}
                                title={fileName}
                                key={index}
                            />
                        ))}
                </Box>
            </Paper>
        </Box>
    );
};