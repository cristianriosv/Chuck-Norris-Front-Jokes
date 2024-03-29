type ToggleButtonProps = {
    checked?: boolean;
    label?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>
}

type ItemListProps = {
    text: string;
    isFavorite: boolean;
    onFavClick: (id: string) => void;
    id: string;
}

type IconButtonProps = ButtonProps;

type LoadingProps = {
    isLoading: boolean;
}

type LocalPopoverProps = Some<PopoverProps> & {
    text: string;
}