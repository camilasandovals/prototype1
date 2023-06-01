import { useState } from "react";
import { Col, Row, Container, Image, Modal } from "react-bootstrap";

export default function Panel({element: {title, content, image}}) {
    const [show, setShow] = useState(false);
    const toggleShow = () => setShow(!show);
    
    return(
        <Col xs={10} md ={6} lg={4} xl={3}>
            <div onClick={toggleShow} >
                <Image src={image} fluid/>
                <h3>{title}</h3>
            </div>
            <Modal centered show={show} onHide={toggleShow} size="lg">
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col xs={12} md={6}>
                                <Image src={image} fluid />
                            </Col>
                            <Col xs={12} md={6}>
                                <h3>{title}</h3>
                                <p>{content}</p>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        </Col>
    )
}