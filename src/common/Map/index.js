import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => (
  <div style={{
    color: 'white',
    background: '#FFEB3B',
    padding: '10px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
  }}>
    {text}
  </div>
);

export default class SimpleMap extends React.Component {
  static defaultProps = {
    center: { lat: 10.778555, lng: 106.701762 },
    zoom: 15
  };

  render() {
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <AnyReactComponent
          lat={10.778555}
          lng={106.701762}
          text={`i'm here`}
        />
      </GoogleMapReact>
    );
  }
}
