import { Col, Row, Container } from "react-bootstrap";
import storeItems from '../data/items.json'
import StoreItem from "./StoreItem";

const Store = () => {

    return (
        <Container>
            <Row md={2} xs={1} lg={3} className="g-5">
                {storeItems.map((item) => (
                    <Col key={item.id}>
                        <StoreItem {...item} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Store