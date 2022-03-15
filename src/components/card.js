import {Card,Button,Container,Row,Col} from 'react-bootstrap';
import { useState } from 'react';
export default function Cards({menuItem}){
  let[count,setCount]=useState(0);
    return(
      <>
      <h5 className="cont text-center mb-4">Count<span className="cont-num mx-2">{count}</span>
</h5>
      <Container>
        <Row>
        {menuItem.map( (el,pos) => 
            <Col lg={3} className="mb-4" key={pos}>
                <Card className="text-center" key={pos}>
                  <Card.Img variant="top" src={el.image} className="img-fluid"/>
                  <Card.Body>
                    <Card.Title className="card-heading">{el.name}</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <Button variant="primary" className="mx-auto" onClick={()=>setCount(count+1)}>Add to chart</Button>
                  </Card.Body>
            </Card>
          </Col>
      )}
        </Row>
      </Container>
      </>
    )
}