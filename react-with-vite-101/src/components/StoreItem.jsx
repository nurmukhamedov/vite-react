import { Card, Button } from "react-bootstrap"

const StoreItem = ({ id, name, price, imgUrl }) => {
    return (

        <Card className='card-wrapper h-100 rounded-5'>
            <div className='card-image--wrapper'>
                <Card.Img className='card-img h-100' variant="top" src={imgUrl} style={{ objectFit: "cover", objectPosition: "center" }} />
            </div>
            <Card.Body className='d-flex flex-column'>
                <Card.Title className='d-flex justify-content-between align-items-center mb-4'>
                    <span className='fs-2 card-title'>{name}</span>
                    <span className='ms-2 text-muted'>{price}</span>
                    <iframe width="885" height="498" src="https://www.youtube.com/embed/z_yQxVK_Fs0" title="Музыка для исцеления стресса, беспокойства и депрессии, избавления от внутреннего гнева и печали" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </Card.Title>
                <div className='mt-mt-auto'>
                    <Button className='card-button w-100'>
                        + Add to Cart
                    </Button>
                </div>
            </Card.Body >
        </Card >

    )
}

export default StoreItem