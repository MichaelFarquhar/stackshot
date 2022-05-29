import { FC } from 'react';
import { AppBar, Box, IconButton, Toolbar, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { PageContainer } from '../PageContainer';
import { HeaderLogo } from './HeaderLogo';

export const Header: FC = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar>
                <PageContainer>
                    <Toolbar disableGutters>
                        <HeaderLogo />
                        <div>
                            <Link
                                href="https://github.com/MichaelFarquhar/stackshot"
                                target="_blank"
                                color="inherit"
                            >
                                <GitHubIcon fontSize="large" color="inherit" />
                            </Link>
                        </div>
                    </Toolbar>
                </PageContainer>
            </AppBar>
        </Box>
    );
};
