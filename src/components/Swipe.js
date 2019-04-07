import React from 'react'
import { Card, CardWrapper } from 'react-swipeable-cards';
import MapComponent from './MapComponent'
import '../App.css';
import {
  Container,
  Row,
  Col,
} from 'reactstrap'

const Swipe = ({activities}) => {
  return (
      <CardWrapper>
        {activities.map((item, index) =>
          <Card
            key={index}
          >
            <Container>
              <Row>
                <Col className="title-div">
                  <h3 className="title">{item.title}</h3>
                </Col>
              </Row>
              <Row>
                <Col style={{display: 'flex', justifyContent: 'center'}}>
                  <img className="card-image" src={item.imageUrl} alt="location" />
                </Col>
              </Row>
              <Row className="mt-3">
                <Col xl="2">
                  <p>{item.fromPrice}</p>
                </Col>
                <Col>
                  <p>Recommendation Score: {item.recommendationScore}</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p style={{"font-size": "13px"}}>Categories: {item.categories.join(', ')}</p>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col>
                  <img style={{"height" : "40px"}} src={require('./powered-by-expedia.png')} alt="location" />
                </Col>
                <Col>
                  <img style={{"height" : "40px"}} src={require('./delta.png')} alt="location" />
                </Col>
              </Row>
            </Container>

          </Card>
        )}
      </CardWrapper>
  )
}

export default Swipe
