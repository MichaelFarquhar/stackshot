import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import SVG from 'react-inlinesvg';
import { useRecoilValue } from 'recoil';
import { svgSizeState, svgSpacingXState, svgSpacingYState, svgState } from '../App';

export const Preview: FC = () => {
    const svgs = useRecoilValue(svgState);
    const svgSize = useRecoilValue(svgSizeState);
    const svgSpacingX = useRecoilValue(svgSpacingXState);
    const svgSpacingY = useRecoilValue(svgSpacingYState);
    const svgDirectory = `${process.env.PUBLIC_URL}/svgs/`;

    return (
        <>
            <Typography variant="h5" component="div" gutterBottom>
                Preview
            </Typography>
            <Box>
                {svgs &&
                    svgs.map((fileName: string, index: number) => (
                        <SVG
                            src={`${svgDirectory}${fileName}.svg`}
                            width={svgSize}
                            height={svgSize}
                            style={{ margin: `${svgSpacingY} ${svgSpacingX}` }}
                            title={fileName}
                            key={index}
                        />
                    ))}
            </Box>
        </>
    );
};
