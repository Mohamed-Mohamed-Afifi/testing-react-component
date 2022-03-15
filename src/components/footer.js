import { Container,Row,Col,ListGroup } from "react-bootstrap"
export default function Footer(){
    return(
        <div className="footers mt-5 py-5">
            <Container className="footer-links">
            <img src="https://www.svgrepo.com/show/349301/authy.svg" alt="logo" class="logo"/>
                <Row>
                 <Col lg={4} className="mb-4">
                            <ListGroup>
                                <ListGroup.Item>
                                    <h5 className="footer-heading">About</h5>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <a href="https//www.google.com">Mission</a>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <a href="https//www.google.com">Services</a>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <a href="https//www.google.com">Social</a>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <a href="https//www.google.com">Get in touch</a>
                                </ListGroup.Item>
                        </ListGroup>
                 </Col>
                 <Col lg={4} className="mb-4">
                            <ListGroup>
                                <ListGroup.Item>
                                    <h5 className="footer-heading">webMail</h5>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <a href="https//www.google.com">Redeem code</a>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <a href="https//www.google.com">WHois lookup</a>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <a href="https//www.google.com">Site map</a>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <a href="https//www.google.com">wep templates</a>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <a href="https//www.google.com">Email templates</a>
                                </ListGroup.Item>
                        </ListGroup>
                 </Col>
                 <Col lg={4} className="mb-4">
                            <ListGroup>
                                <ListGroup.Item>
                                    <h5 className="footer-heading">Contact us</h5>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <a href="https//www.google.com">web chat</a>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <a href="https//www.google.com">Open ticket</a>
                                </ListGroup.Item>
                        </ListGroup>
                 </Col>
                </Row>
            </Container>
        </div>
    )
}