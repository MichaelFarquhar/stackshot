import { FC } from 'react';
import { Typography } from '@mui/material';

interface Props {
    label: string;
}

export const FormSectionLabel: FC<Props> = ({ label }) => {
    return (
        <Typography variant="overline" display="block" gutterBottom>
            {label}
        </Typography>
    );
};
