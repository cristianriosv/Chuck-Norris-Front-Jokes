import { Switch } from '@material-tailwind/react';

const ToggleButton = ({ checked, label, onChange }: ToggleButtonProps) => (
    <Switch label={label} checked={checked} onChange={onChange} />
)

export default ToggleButton;
