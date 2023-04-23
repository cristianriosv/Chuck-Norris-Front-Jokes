import { IconButton as TWIconButton } from '@material-tailwind/react';

const IconButton = ({ icon, variant, color, onClick }: IconButtonProps) => (
    <TWIconButton variant={variant} color={color} onClick={onClick}>
        <i className={`fas fa-${icon}`} />
    </TWIconButton>
)

export default IconButton;
