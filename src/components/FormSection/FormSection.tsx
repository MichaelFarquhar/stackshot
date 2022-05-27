import { Box, Grid, Stack, TextField, Typography, Paper } from '@mui/material';
import { FC } from 'react';
import { useRecoilState } from 'recoil';
import {
    borderColorState,
    borderRadiusState,
    borderSizeState,
    svgSizeState,
    svgSpacingXState,
    svgSpacingYState,
} from '../../App';
import { ColorPicker } from '../input/ColorPicker';
import { StackSelector } from './StackSelector';

interface SectionLabelProps {
    label: string;
}

const SectionLabel = ({ label }: SectionLabelProps) => {
    return (
        <Typography variant="overline" display="block" gutterBottom>
            {label}
        </Typography>
    );
};

export const FormSection: FC = () => {
    const [svgSpacingX, setSvgSpacingX] = useRecoilState(svgSpacingXState);
    const [svgSpacingY, setSvgSpacingY] = useRecoilState(svgSpacingYState);
    const [svgSize, setSvgSize] = useRecoilState(svgSizeState);
    const [borderColor, setBorderColor] = useRecoilState(borderColorState);
    const [borderSize, setBorderSize] = useRecoilState(borderSizeState);
    const [borderRadius, setBorderRadius] = useRecoilState(borderRadiusState);

    return (
        <Paper sx={{ p: 5 }} elevation={3}>
            <Stack spacing={3}>
                <Box>
                    <SectionLabel label="Select SVG" />
                    <Grid container>
                        <Grid item xs={12}>
                            <StackSelector />
                        </Grid>
                    </Grid>
                </Box>
                <Box>
                    <SectionLabel label="SVG Options" />
                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                            <TextField
                                name="spacingX"
                                variant="standard"
                                type="number"
                                label="Spacing (x-axis)"
                                defaultValue={svgSpacingX}
                                onChange={(e) =>
                                    setSvgSpacingX(
                                        parseInt(
                                            e.target.value === '' ? '0' : e.target.value
                                        )
                                    )
                                }
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                name="spacingY"
                                variant="standard"
                                type="number"
                                label="Spacing (y-axis)"
                                defaultValue={svgSpacingY}
                                onChange={(e) =>
                                    setSvgSpacingY(
                                        parseInt(
                                            e.target.value === '' ? '0' : e.target.value
                                        )
                                    )
                                }
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                variant="standard"
                                type="number"
                                label="Size"
                                defaultValue={svgSize}
                                onChange={(e) =>
                                    setSvgSize(
                                        parseInt(
                                            e.target.value === '' ? '0' : e.target.value
                                        )
                                    )
                                }
                            />
                        </Grid>
                    </Grid>
                </Box>
                <Box>
                    <SectionLabel label="Border Options" />
                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                            <ColorPicker
                                color={borderColor}
                                onChangeColor={setBorderColor}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                name="borderSize"
                                variant="standard"
                                type="number"
                                label="Border Size (px)"
                                defaultValue={borderSize}
                                onChange={(e) =>
                                    setBorderSize(
                                        parseInt(
                                            e.target.value === '' ? '0' : e.target.value
                                        )
                                    )
                                }
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                name="borderRadius"
                                variant="standard"
                                type="number"
                                label="Border Radius (px)"
                                defaultValue={borderRadius}
                                onChange={(e) =>
                                    setBorderRadius(
                                        parseInt(
                                            e.target.value === '' ? '0' : e.target.value
                                        )
                                    )
                                }
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Stack>
        </Paper>
    );
};
