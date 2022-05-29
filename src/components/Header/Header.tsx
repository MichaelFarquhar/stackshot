import { FC } from 'react';
import { AppBar, Box, Toolbar, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { PageContainer } from '../PageContainer';
import { HeaderLogo } from './HeaderLogo';

export const Header: FC = () => {
    return (
        <Box sx={{ flexGrow: 1, mb: 5 }}>
            <AppBar position="relative">
                <PageContainer>
                    <Toolbar disableGutters>
                        <HeaderLogo />
                        <Link
                            href="https://github.com/MichaelFarquhar/stackshot"
                            target="_blank"
                            color="inherit"
                        >
                            <GitHubIcon fontSize="large" color="inherit" />
                        </Link>
                    </Toolbar>
                </PageContainer>
            </AppBar>
        </Box>
    );
};
