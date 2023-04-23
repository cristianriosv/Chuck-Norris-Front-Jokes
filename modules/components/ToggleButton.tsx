import { Switch } from '@material-tailwind/react';

const ToggleButton = ({ checked, label, onChange }: ToggleButtonProps) => (
    <Switch color="red" label={label} checked={checked} onChange={onChange} />
)

export default ToggleButton;
