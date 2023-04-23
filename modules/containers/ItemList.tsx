import IconButton from '@components/IconButton';
import { Card, CardBody, Typography } from '@material-tailwind/react';

const ItemList = ({ text, isFavorite, onFavClick, id }: ItemListProps) => (
    <Card>
        <CardBody className="flex p-2 items-center">
            <IconButton
                icon="heart"
                variant="text"
                color={isFavorite ? 'red' : 'gray'}
                onClick={() => onFavClick(id)}
            />
            <Typography>
                {text}
            </Typography>
        </CardBody>
    </Card>
)

export default ItemList;