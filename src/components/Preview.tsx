import { Box, Card, Typography } from '@mui/material';
import { FC } from 'react';
import SVG from 'react-inlinesvg';
import { useRecoilValue } from 'recoil';
import { svgState } from '../App';

interface Props {}

export const Preview: FC<Props> = (props) => {
    const svgs = useRecoilValue(svgState);
    const svgDirectory = `${process.env.PUBLIC_URL}/svgs/`;

    return (
        <Card>
            <Box>
                <Typography variant="h5" component="div" gutterBottom>
                    Preview
                </Typography>
                {svgs &&
                    svgs.map((fileName: string) => (
                        <SVG
                            src={`${svgDirectory}${fileName}.svg`}
                            width={70}
                            height={70}
                            title={fileName}
                        />
                    ))}
            </Box>
        </Card>
    );
};
