import { useShoppingCart } from "../context/ShoppingCart";
import { Stack, Button } from "react-bootstrap";

import storeItems from '../data/items.json';
import { formatCurrency } from "../utilities/formatCurrency";

const CartItem = ({ id, quantity }) => {

    const { removeItem } = useShoppingCart();

    const item = storeItems.find(i => i.id === id);

    if (item == null) return null;


    return (
        <Stack direction="horizontal" gap={2} className="d-flex">
            <img src={item.imgUrl} style={{ width: "125px", height: "75px" }} />
            <span>{item.name}</span>
            {quantity > 1 && (
                <span>{quantity}</span>
            )}
            <span>
                {formatCurrency(item.price)}
            </span>
            <Button onClick={() => removeItem(item.id)}>
                &times;
            </Button>
        </Stack>
    )
}

export default CartItem