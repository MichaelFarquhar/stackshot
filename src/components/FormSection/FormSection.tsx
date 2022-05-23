import { FormControlLabel, Grid, Switch, Typography } from '@mui/material';
import { FC } from 'react';
import { StackSelector } from './StackSelector';

interface SectionLabelProps {
    label: string;
}

const SectionLabel = ({ label }: SectionLabelProps) => {
    return (
        <Typography variant="overline" display="block">
            {label}
        </Typography>
    );
};

export const FormSection: FC = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <SectionLabel label="Select SVG" />
                <StackSelector />
            </Grid>
            <Grid item xs={12}>
                <SectionLabel label="Orientation" />
                <FormControlLabel control={<Switch />} label="Vertical" />
            </Grid>
        </Grid>
    );
};
