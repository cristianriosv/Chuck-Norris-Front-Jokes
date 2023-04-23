import { useState } from 'react';
import { Popover as TWPopover, PopoverContent, PopoverHandler, Typography } from '@material-tailwind/react';

const Popover = ({ children, text }: LocalPopoverProps) => {
    const [openPopover, setOpenPopover] = useState(false);
    const triggers = {
        onMouseEnter: () => setOpenPopover(true),
        onMouseLeave: () => setOpenPopover(false),
    };

    return (
        <TWPopover
            animate={{
                mount: { scale: 0.95, y: 0 },
                unmount: { scale: 0, y: 25 },
            }}
            open={openPopover} handler={setOpenPopover}
        >
            <PopoverHandler {...triggers}>
                {children}
            </PopoverHandler>
            <PopoverContent>
                <Typography variant="h6" className="max-w-prose">
                    {text}
                </Typography>
            </PopoverContent>
        </TWPopover>
    );
}

export default Popover;