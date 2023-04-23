import IconButton from '@components/IconButton';
import { Card, CardBody, Typography } from '@material-tailwind/react';

const ItemList = ({ text, isFavorite, onFavClick, id }: ItemListProps) => (
    <Card>
        <CardBody className="flex p-2 pl-5 items-center max-w-md">
            <Typography className="truncate w-full">
                {text}
            </Typography>
            <IconButton
                icon="heart"
                variant={isFavorite ? 'gradient' : 'text'}
                color={isFavorite ? 'red' : 'gray'}
                onClick={() => onFavClick(id)}
            />
        </CardBody>
    </Card>
)

export default ItemList;