import { Col, Container, Row } from "react-bootstrap"
import AppLayout from "../layout/AppLayout.jsx"

export default function About(){
    return(
        <AppLayout>
            <Container>
                <Row>
                    <Col>
                        <h2>About</h2>
                    </Col>
                </Row>
            </Container>
        </AppLayout>
    )
}