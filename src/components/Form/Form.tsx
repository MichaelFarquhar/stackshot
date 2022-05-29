import { FC } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { FormSection } from './FormSection';
import { PageContainer } from '../PageContainer';

export const Form: FC = () => {
    return (
        <Box>
            <PageContainer>
                <Typography variant="h5" component="div" mb={3}>
                    Edit Form
                </Typography>
                <Paper sx={{ p: 5, mt: 0 }} elevation={3}>
                    <FormSection />
                </Paper>
            </PageContainer>
        </Box>
    );
};
