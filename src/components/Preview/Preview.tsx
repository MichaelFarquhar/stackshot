import { Box, Button, Paper, Typography, Alert } from '@mui/material';
import { FC, useState, useRef, useCallback } from 'react';
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
import { toPng, toSvg } from 'html-to-image';
import { PageContainer } from '../PageContainer';

export const Preview: FC = () => {
    const [fileError, setFileError] = useState('');

    const svgList = useRecoilValue(svgState);
    const svgSize = useRecoilValue(svgSizeState);
    const svgSpacingX = useRecoilValue(svgSpacingXState);
    const svgSpacingY = useRecoilValue(svgSpacingYState);
    const boxBorderColor = useRecoilValue(borderColorState);
    const boxBorderSize = useRecoilValue(borderSizeState);
    const boxBorderRadius = useRecoilValue(borderRadiusState);

    const svgDirectory = `${process.env.PUBLIC_URL}/svgs/`;

    const imageRef = useRef<HTMLDivElement>(null);

    // Download ref as png
    const downloadPng = useCallback(() => {
        if (imageRef.current === null) {
            setFileError('No stacks were added.');
            return;
        }
        if (imageRef.current.childElementCount === 0) {
            setFileError('No stacks were added.');
            return;
        }
        toPng(imageRef?.current)
            .then((dataUrl) => {
                var img = new Image();
                img.src = dataUrl;

                var link = document.createElement('a');
                link.download = 'stackshot.png';
                link.href = dataUrl;
                link.click();
            })
            .catch((err) => {
                setFileError(err);
            });
    }, [imageRef]);

    // Download ref as svg
    const downloadSvg = useCallback(() => {
        if (imageRef.current === null) {
            return;
        }
        if (imageRef.current.childElementCount === 0) {
            setFileError('No stacks were added.');
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
                setFileError(err);
            });
    }, [imageRef]);

    enum ImageType {
        SVG,
        PNG,
    }

    const downloadAsFile = useCallback(
        (type: ImageType) => {
            if (imageRef.current === null) {
                setFileError('No stacks were added.');
                return;
            }
            if (imageRef.current.childElementCount === 0) {
                setFileError('No stacks were added.');
                return;
            }

            if (type === ImageType.PNG) {
                downloadPng();
            } else if (type === ImageType.SVG) {
                downloadSvg();
            }
        },
        [imageRef, ImageType, downloadPng, downloadSvg]
    );

    return (
        <Box>
            <PageContainer>
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
                    <Box>
                        <Button
                            variant="outlined"
                            onClick={() => downloadAsFile(ImageType.PNG)}
                            sx={{ mr: 2 }}
                        >
                            Download As Png
                        </Button>
                        <Button
                            variant="outlined"
                            onClick={() => downloadAsFile(ImageType.SVG)}
                        >
                            Download As Svg
                        </Button>
                    </Box>
                </Box>

                {fileError && (
                    <Alert severity="error" sx={{ mb: 3 }}>
                        {fileError}
                    </Alert>
                )}

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
                        {svgList &&
                            svgList.map((fileName: string, index: number) => (
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
            </PageContainer>
        </Box>
    );
};
