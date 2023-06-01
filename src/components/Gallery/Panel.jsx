import { Col, Image } from "react-bootstrap";

export default function Panel({element: {title, content, image}}) {
    return(
        <Col xs={10} md ={6} lg={4} xl={3}>
            <Image src={image} fluid/>
            <h3>{title}</h3>
        </Col>
    )
}