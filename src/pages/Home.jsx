import { Col, Container, Row } from "react-bootstrap";
import Gallery from "../components/Gallery"
import AppLayout from "../layout/AppLayout";

export default function Home(){
    return(
        <AppLayout>
            <Container>
                <Row>
                    <Col>
                        <h2>Home</h2>
                    </Col>
                </Row>
            </Container>
            <Gallery />
        </AppLayout>
    )
}