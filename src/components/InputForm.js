import React from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Container,
  Row,
  Col
} from 'reactstrap'

const InputForm = ({changeCity, getEvents}) => {
  return(<Container fluid={true}>
    <h1 id ="swipe">Swipe-See</h1>
    <Row>
      <Col xl="3">

      </Col>
      <Col>
        <Form onSubmit={getEvents} className="p-4" id="initial-form" >
          <FormGroup>
            <Label htmlFor="passport">Passport Number</Label>
            <Input type="text" name="passport"  />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="destination">Destination</Label>
            <Input type="select" name="destination" id="destination" onChange={changeCity}>
              <option value="Atlanta">Atlanta</option>
              <option value="Austin">Austin</option>
              <option value="Barcelona">Barcelona</option>
              <option value="Berlin">Berlin</option>
              <option value="Boston">Boston</option>
              <option value="Denver">Denver</option>
              <option value="London">London</option>
              <option value="Los+Angeles">Los Angeles</option>
              <option value="Madrid">Madrid</option>
              <option value="Miami">Miami</option>
              <option value="New+Orelans">New Orleans</option>
              <option value="Orlando">Orlando</option>
              <option value="Paris">Paris</option>
              <option value="San+Francisco">San Francisco</option>
              <option value="Seattle">Seattle</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="Origin">Origin</Label>
            <Input type="select" name="origin" id="origin">
              <option value="atlanta">Atlanta</option>
              <option value="austin">Austin</option>
              <option value="barcelona">Barcelona</option>
              <option value="berlin">Berlin</option>
              <option value="boston">Boston</option>
              <option value="denver">Denver</option>
              <option value="london">London</option>
              <option value="los+angeles">Los Angeles</option>
              <option value="madrid">Madrid</option>
              <option value="miami">Miami</option>
              <option value="new+orelans">New Orleans</option>
              <option value="orlando">Orlando</option>
              <option value="paris">Paris</option>
              <option value="san+francisco">San Francisco</option>
              <option value="seattle">Seattle</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="passengers">Number of Passengers</Label>
            <Input type="select" name="passengers" id="passengers">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </FormGroup>
          <Button color="primary" size="lg" block>Swipe Your Adventure</Button>
        </Form>
        </Col>
        <Col xl="3"></Col>

      </Row>
    </Container>)
}

export default InputForm
