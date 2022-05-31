import { Box, Grid, Stack, TextField } from '@mui/material';
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
import { ColorPicker } from './input/ColorPicker';
import { StackSelector } from './input/StackSelector';
import { FormSectionLabel } from './FormSectionLabel';

export const FormSection: FC = () => {
    const [svgSpacingX, setSvgSpacingX] = useRecoilState(svgSpacingXState);
    const [svgSpacingY, setSvgSpacingY] = useRecoilState(svgSpacingYState);
    const [svgSize, setSvgSize] = useRecoilState(svgSizeState);
    const [borderColor, setBorderColor] = useRecoilState(borderColorState);
    const [borderSize, setBorderSize] = useRecoilState(borderSizeState);
    const [borderRadius, setBorderRadius] = useRecoilState(borderRadiusState);

    return (
        <Stack spacing={3}>
            <Box>
                <FormSectionLabel label="Select SVG" />
                <Grid container>
                    <Grid item xs={12}>
                        <StackSelector />
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <FormSectionLabel label="SVG Options" />
                <Grid container spacing={3}>
                    <Grid item md={4} xs={6}>
                        <TextField
                            name="spacingX"
                            variant="standard"
                            type="number"
                            label="Svg Spacing (x)"
                            defaultValue={svgSpacingX}
                            onChange={(e) =>
                                setSvgSpacingX(
                                    parseInt(e.target.value === '' ? '0' : e.target.value)
                                )
                            }
                        />
                    </Grid>
                    <Grid item md={4} xs={6}>
                        <TextField
                            name="spacingY"
                            variant="standard"
                            type="number"
                            label="Svg Spacing (y)"
                            defaultValue={svgSpacingY}
                            onChange={(e) =>
                                setSvgSpacingY(
                                    parseInt(e.target.value === '' ? '0' : e.target.value)
                                )
                            }
                        />
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <TextField
                            name="svgSize"
                            variant="standard"
                            type="number"
                            label="Svg Size"
                            defaultValue={svgSize}
                            onChange={(e) =>
                                setSvgSize(
                                    parseInt(e.target.value === '' ? '0' : e.target.value)
                                )
                            }
                        />
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <FormSectionLabel label="Border Options" />
                <Grid container spacing={3}>
                    <Grid item md={4} xs={12}>
                        <ColorPicker color={borderColor} onChangeColor={setBorderColor} />
                    </Grid>
                    <Grid item md={4} xs={6}>
                        <TextField
                            name="borderSize"
                            variant="standard"
                            type="number"
                            label="Border Size (px)"
                            defaultValue={borderSize}
                            onChange={(e) =>
                                setBorderSize(
                                    parseInt(e.target.value === '' ? '0' : e.target.value)
                                )
                            }
                        />
                    </Grid>
                    <Grid item md={4} xs={6}>
                        <TextField
                            name="borderRadius"
                            variant="standard"
                            type="number"
                            label="Border Radius (px)"
                            defaultValue={borderRadius}
                            onChange={(e) =>
                                setBorderRadius(
                                    parseInt(e.target.value === '' ? '0' : e.target.value)
                                )
                            }
                        />
                    </Grid>
                </Grid>
            </Box>
        </Stack>
    );
};
