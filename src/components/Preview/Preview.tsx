import {
    Box,
    Button,
    Paper,
    Typography,
    Alert,
    Switch,
    FormControlLabel,
} from '@mui/material';
import { FC, useState, useRef, useCallback } from 'react';
import SVG from 'react-inlinesvg';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
    borderColorState,
    borderRadiusState,
    borderSizeState,
    previewBorderState,
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
    const [borderPreview, setBorderPreview] = useRecoilState(previewBorderState);

    const svgDirectory = `${process.env.PUBLIC_URL}/svgs/`;

    const imageRef = useRef<HTMLDivElement>(null);

    // Download ref as png
    const downloadPng = useCallback(() => {
        if (imageRef.current === null) {
            return;
        }
        if (imageRef.current.childElementCount === 0) {
            setFileError('There are currently no stacks added.');
            return;
        }
        toPng(imageRef?.current)
            .then((dataUrl) => {
                setFileError('');
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
            setFileError('There are currently no stacks added.');
            return;
        }
        toSvg(imageRef?.current, { cacheBust: true })
            .then((dataUrl) => {
                setFileError('');
                var link = document.createElement('a');
                link.download = 'stackshot.svg';
                link.href = dataUrl;
                link.click();
            })
            .catch((err) => {
                setFileError(err);
            });
    }, [imageRef]);

    return (
        <Box>
            <PageContainer>
                {/* Preview Header */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: {
                            xs: 'flex-start',
                            sm: 'center',
                        },
                        flexDirection: {
                            xs: 'column',
                            sm: 'row',
                        },
                        rowGap: {
                            xs: '0.75em',
                            sm: '0em',
                        },
                    }}
                    mb={3}
                >
                    <Typography variant="h5" component="div">
                        Preview
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: {
                                xs: 'column',
                                sm: 'row',
                            },
                            rowGap: {
                                xs: '0.75em',
                                sm: '0em',
                            },
                        }}
                    >
                        <Button
                            variant="outlined"
                            onClick={() => downloadPng()}
                            sx={{ mr: 2 }}
                        >
                            Download As Png
                        </Button>
                        <Button variant="outlined" onClick={() => downloadSvg()}>
                            Download As Svg
                        </Button>
                    </Box>
                </Box>

                {fileError && (
                    <Alert severity="error" sx={{ mb: 3 }}>
                        {fileError}
                    </Alert>
                )}

                {/* Switch to show preview borders */}
                <FormControlLabel
                    label="Preview Borders"
                    control={
                        <Switch
                            checked={borderPreview}
                            inputProps={{ 'aria-label': 'Preview Borders' }}
                            onChange={() => setBorderPreview((preview) => !preview)}
                            disabled={boxBorderSize > 0}
                        />
                    }
                    sx={{ mb: 1 }}
                />

                {/* Preview Image */}
                <Paper sx={{ p: 5, mb: 3 }} elevation={3}>
                    <Box
                        ref={imageRef}
                        style={{
                            width: 'fit-content',
                            background: 'rgba(0, 0, 0, 0)',
                            margin: 0,
                            lineHeight: '0',
                            border: boxBorderSize
                                ? `${boxBorderSize}px solid ${boxBorderColor}`
                                : `${borderPreview ? '1' : '0'}px solid #ffc353`,
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
