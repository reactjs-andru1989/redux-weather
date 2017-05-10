import React, { Component } from 'react';

class GoogleMap extends Component {
  componentDidMount() { // automatically called after the component has been render to the scree
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    return <div ref="map" />;
  }
}

export default GoogleMap;
