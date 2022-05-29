import { Popover, Box, Button } from '@mui/material';
import { FC, useRef, useState } from 'react';
import { HexColorPicker } from 'react-colorful';

interface Props {
    color: string;
    onChangeColor: (e: string) => void;
}

export const ColorPicker: FC<Props> = ({ color, onChangeColor }) => {
    const [popoverOpen, setPopoverOpen] = useState(false);
    const popoverBtnRef = useRef(null);

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                height: '100%',
            }}
        >
            <div
                style={{
                    width: '35px',
                    height: '35px',
                    background: color,
                    borderRadius: '6px',
                    marginRight: '1em',
                }}
            ></div>
            <Button
                variant="outlined"
                onClick={() => setPopoverOpen((open) => !open)}
                ref={popoverBtnRef}
            >
                Change Color
            </Button>
            <Popover
                open={popoverOpen}
                onClose={() => setPopoverOpen(false)}
                anchorEl={popoverBtnRef.current}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <HexColorPicker color={color} onChange={onChangeColor} />
            </Popover>
        </Box>
    );
};
