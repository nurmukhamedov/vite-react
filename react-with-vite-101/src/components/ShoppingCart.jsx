import { useShoppingCart } from "../context/ShoppingCart";
import { Stack, Offcanvas } from "react-bootstrap";
import CartItem from "./CartItem";
import { formatCurrency } from "../utilities/formatCurrency";
import storeItems from '../data/items.json';


const ShoppingCart = ({ isOpen }) => {

    const { closeCart, cartItems } = useShoppingCart();

    return (

        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {
                        cartItems.map((item) => (
                            <CartItem key={item.id} {...item} />
                        ))
                    }

                    <div>
                        Total
                        {
                            formatCurrency(
                                cartItems.reduce((total, cartItem) => {
                                    const items = storeItems.find(i => i.id === cartItem.id)
                                    return total + (items?.price || 0) * cartItem.quantity
                                }, 0)
                            )

                        }
                    </div>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default ShoppingCart