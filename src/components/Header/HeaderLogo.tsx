import { FC } from 'react';
import CameraIcon from '@mui/icons-material/Camera';
import { Typography } from '@mui/material';

export const HeaderLogo: FC = () => {
    return (
        <>
            <CameraIcon sx={{ mr: 1, mt: 0.15 }} color="inherit" />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Stackshot
            </Typography>
        </>
    );
};
