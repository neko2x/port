import { Container,Col,Row } from "react-bootstrap"



const Footer = () => {
//rgb(14, 19, 26);
    

    return (
        <footer style={{background:"rgb(13, 18, 27)"}}>
            <Container fluid={true}>
                <Row className="border-top p-3">
                    <Col className="text-center p-0 text-light" md={12} sm={12}>
                        Šemsudin Bešo  &copy; 2021
                    </Col>
                  
                </Row>
            </Container>
        </footer>
 
    )
}

export default Footer