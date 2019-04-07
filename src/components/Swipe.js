import React from 'react'
import { Card, CardWrapper } from 'react-swipeable-cards';
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
                <Col>
                  <p style={{"font-size": "13px"}}>Categories: {item.categories.join(', ')}</p>
                </Col>
              </Row>
              <Row>
                <Col xl="7">
                  <p>{item.fromPrice}</p>
                  <p>Recommendation Score: {item.recommendationScore}</p>
                </Col>
                <Col>

                  <a href={`http://maps.google.com/maps?q=${item.latLng.split(',')[0]},${item.latLng.split(',')[1]}`} target="blank"><img style={{"height" : "60px"}} src={require('./google-maps.png')}  alt="location" /></a>
                  <p style={{"font-size": "10px"}}>View on Google Maps</p>
                </Col>
              </Row>
              <Row className="mt-3">
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
