import { Col, Container, Row } from "react-bootstrap";
import Gallery from "../components/Gallery"
import AppLayout from "../layout/AppLayout";

export default function Home(){
    return(
        <AppLayout>
            <Container className="my-5">
                <Row>
                    <Col>
                        <h2>Home</h2>
                    </Col>
                    </Row>
                    <Row>
                    <Col md={11} lg={10} xl={8}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore neque voluptatum quos id. Vel, inventore! Optio, iste. Qui iure impedit id minus eius deleniti tempore animi aliquid, veritatis ratione reprehenderit.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore neque voluptatum quos id. Vel, inventore! Optio, iste. Qui iure impedit id minus eius deleniti tempore animi aliquid, veritatis ratione reprehenderit.</p>
                    </Col>
                </Row>
            </Container>
            <Gallery />
        </AppLayout>
    )
}