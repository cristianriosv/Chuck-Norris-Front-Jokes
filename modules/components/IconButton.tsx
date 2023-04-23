import { IconButton as TWIconButton } from '@material-tailwind/react';

const IconButton = ({ icon, variant, color, onClick, size }: IconButtonProps) => (
    <TWIconButton variant={variant} color={color} onClick={onClick} size={size}>
        <i className={`fas fa-${icon}`} />
    </TWIconButton>
)

export default IconButton;
