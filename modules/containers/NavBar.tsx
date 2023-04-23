import { Button, Navbar as TWNavBar, Typography } from '@material-tailwind/react';
import { useRouter } from 'next/router';

type RouteProps = {
    path: string;
    label: string;
}

const APP_ROUTES: RouteProps[] = [
    {
        path: '/',
        label: 'Home'
    },
    {
        path: '/favorites',
        label: 'Favorites'
    }
];

const NavBar = () => {
    const { pathname, push } = useRouter();
    const isRouteActive = (route: string) => pathname === route;

    const navigateToRoute = (route: string) => {
        if (!isRouteActive(route)) {
            push(route);
        }
    }

    const renderMenuItem = (menuItem: RouteProps) => (
        <Typography
            as="li"
            variant="small"
            color="white"
            className="p-1 font-normal cursor-pointer"
            key={menuItem.path}
        >
            <Button
                variant={isRouteActive(menuItem.path) ? 'filled' : 'outlined'}
                onClick={() => navigateToRoute(menuItem.path)}
                className="flex items-center gap-2"
                color="red"
            >
                {menuItem.label}
            </Button>
        </Typography>
    );

    return (
        <TWNavBar
            shadow
            blurred
            className="mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6"
            color={'transparent'}
        >
            <Typography variant="h3" className="text-center">
                Chuck Jokes
            </Typography>
            <ul className="mb-4 mt-2 flex gap-2 justify-center">
                {APP_ROUTES.map((menuItem) => renderMenuItem(menuItem))}
            </ul>
        </TWNavBar>
    );
}

export default NavBar;
