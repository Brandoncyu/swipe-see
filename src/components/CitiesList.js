import React from 'react';
import {
  Container,
  Row,
  Col,
  ListGroup, ListGroupItem
} from 'reactstrap'


const InputForm = ({cities, backToCity}) => {
  return(<Container fluid={true}>
    <Row>
      <Col xl="3"></Col>
      <Col>
        <div id="cities-list" >
        <h2 id="title">View your previous cities</h2>
        <ListGroup id="listGroup">
          {cities.map((city, index) => <ListGroupItem tag="a" href="#" onClick={()=>backToCity(city)}>{city.split('+').join(' ')}</ListGroupItem>)}
        </ListGroup>
        </div>
        </Col>
        <Col xl="3"></Col>

      </Row>
    </Container>)
}

export default InputForm
