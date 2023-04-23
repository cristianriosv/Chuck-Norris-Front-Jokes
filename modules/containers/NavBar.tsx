import { Navbar as TWNavBar, Typography } from '@material-tailwind/react';
import Link from 'next/link';

const NavBar = () => (
    <TWNavBar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <Link href="/">
                Home
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <Link href="/favorites">
                Favorites
                </Link>
            </Typography>
        </ul>
    </TWNavBar>
);

export default NavBar;
