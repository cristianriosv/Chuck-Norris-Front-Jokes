import { Typography } from '@material-tailwind/react';

const Loading = ({ isLoading }: LoadingProps) => (
    <div className={`flex items-center gap-3 duration-1000 ${isLoading ? 'transition-none opacity-100' : 'transition-opacity opacity-0'}`}>
        <Typography color="red" variant="h3" className="relative">
            <i className="fas fa-brain" />
            <i className="fas fa-brain animate-ping absolute top-0 left-0" />
        </Typography>
        <Typography>
            Getting jokes...
        </Typography>
    </div>
);

export default Loading;