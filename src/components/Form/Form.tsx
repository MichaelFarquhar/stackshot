import { FC } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { FormSection } from './FormSection';

export const Form: FC = () => {
    return (
        <Box>
            <Typography variant="h5" component="div" mb={3}>
                Edit Form
            </Typography>
            <Paper sx={{ p: 5, mt: 0 }} elevation={3}>
                <FormSection />
            </Paper>
        </Box>
    );
};
