import IconButton from '@components/IconButton';
import { Card, CardBody, Typography } from '@material-tailwind/react';

const ItemList = ({ text, isFavorite, onFavClick, id }: ItemListProps) => (
    <Card color="transparent" className="bg-gray-900">
        <CardBody className="flex p-2 pl-5 items-center max-w-md gap-2">
            <Typography className="truncate w-full" color="white">
                {text}
            </Typography>
            <IconButton
                icon="heart"
                size="sm"
                variant={isFavorite ? 'gradient' : 'outlined'}
                color={isFavorite ? 'red' : 'gray'}
                onClick={() => onFavClick(id)}
            />
        </CardBody>
    </Card>
)

export default ItemList;