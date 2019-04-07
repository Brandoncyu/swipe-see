import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker  } from 'google-maps-react';
import {
  Container,
  Row,
  Col,
} from 'reactstrap'

const mapStyles = {
  width: '50%',
  height: '30vh',
  marginLeft: 'auto',
  marginRight: 'auto'
};

export class MapContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    }
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  lat = this.props.latLng.split(',')[0]
  lng = this.props.latLng.split(',')[1]

  render() {
    return (
        <Container fluid={true} >
          <Row>
          <Col xl="0"></Col>
          <Col xl="12" >
            <div style={{ height: '32vh', textAlign: "center"}} id="map">
              <Map
                google={this.props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={{
                 lat: this.lat,
                 lng: this.lng
                }}>
                <Marker
                  onClick={this.onMarkerClick}
                  name={this.props.name}
                />
                <InfoWindow
                  marker={this.state.activeMarker}
                  visible={this.state.showingInfoWindow}
                  onClose={this.onClose}
                >
                  <div>
                    <h4>{this.state.selectedPlace.name}</h4>
                  </div>
                </InfoWindow>
              </Map>
            </div>
            </Col>
            <Col xl="0"></Col>
          </Row>
        </Container>

    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBUNFlc_YrmWgt1qBu_Om8UU5UVFbCN260'
})(MapContainer);
