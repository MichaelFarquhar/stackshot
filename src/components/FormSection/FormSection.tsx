import {
    Box,
    FormControlLabel,
    Grid,
    Stack,
    Switch,
    TextField,
    Typography,
} from '@mui/material';
import { FC } from 'react';
import { useRecoilState } from 'recoil';
import { svgSizeState, svgSpacingXState, svgSpacingYState } from '../../App';
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

    return (
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
                <SectionLabel label="SVG Customization" />
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
                                    parseInt(e.target.value === '' ? '0' : e.target.value)
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
                                    parseInt(e.target.value === '' ? '0' : e.target.value)
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
                                    parseInt(e.target.value === '' ? '0' : e.target.value)
                                )
                            }
                        />
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <SectionLabel label="Orientation" />
                <Grid container>
                    <Grid item xs={12}>
                        <FormControlLabel control={<Switch />} label="Vertical" />
                    </Grid>
                </Grid>
            </Box>
        </Stack>
    );
};