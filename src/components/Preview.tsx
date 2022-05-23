import { Box, Card, Typography } from '@mui/material';
import { FC } from 'react';

interface Props {}

export const Preview: FC<Props> = (props) => {
    return (
        <Card>
            <Box>
                <Typography variant="h5" component="div" gutterBottom>
                    Preview
                </Typography>
            </Box>
        </Card>
    );
};
