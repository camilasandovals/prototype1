import { useState } from "react";
import { Col, Image, Modal } from "react-bootstrap";

export default function Panel({element: {title, content, image}}) {
    const [show, setShow] = useState(false);
    const toggleShow = () => setShow(!show);
    
    return(
        <Col xs={10} md ={6} lg={4} xl={3}>
            <div onClick={toggleShow} >
                <Image src={image} fluid/>
                <h3>{title}</h3>
            </div>
            <Modal show={show} onHide={toggleShow}>
                <Image src={image} fluid />
                <h3>{title}</h3>
                <p>{content}</p>
            </Modal>
        </Col>
    )
}