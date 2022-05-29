import { FC } from 'react';
import { Container } from '@mui/material';

interface Props {
    children: React.ReactNode;
}

export const PageContainer: FC<Props> = ({ children }) => {
    return <Container maxWidth="md">{children}</Container>;
};
