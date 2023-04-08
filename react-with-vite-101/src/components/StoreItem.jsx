import { Card, Button } from "react-bootstrap"
import { formatCurrency } from "../utilities/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCart";
import './store.scss';
const StoreItem = ({ id, name, price, imgUrl }) => {

    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeItem
    } = useShoppingCart();

    const quantity = getItemQuantity(id);

    return (

        <Card className='card-wrapper h-100 rounded-5'>
            <div className='card-image--wrapper'>
                <Card.Img className='card-img h-100' variant="top" src={imgUrl} style={{ objectFit: "cover", objectPosition: "center" }} />
            </div>
            <Card.Body className='d-flex flex-column'>
                <Card.Title className='d-flex justify-content-between align-items-center mb-4'>
                    <span className='fs-2 card-title'>{name}</span>
                    <span className='ms-2 text-muted'>{formatCurrency(price)}</span>
                </Card.Title>
                <div className='mt-mt-auto'>
                    {
                        quantity === 0 ? (
                            <Button className='card-button w-100' onClick={() => increaseCartQuantity(id)}>
                                + Add to Cart
                            </Button>
                        ) : (
                            <div className='d-flex align-items-center flex-column' style={{ gap: ".5rem" }}>
                                <div className='d-flex align-items-center justify-content-center' style={{ gap: ".5rem" }}>
                                    <Button onClick={() => decreaseCartQuantity(id)}>
                                        -
                                    </Button>
                                    <div>
                                        <span className='fs-3'>{quantity}</span> in cart
                                    </div>
                                    <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                                </div>
                                <Button variant="danger" size="sm" onClick={() => removeItem(id)}>
                                    Remove
                                </Button>
                            </div>
                        )
                    }
                </div>
            </Card.Body >
        </Card >

    )
}

export default StoreItem