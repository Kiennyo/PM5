import React, { Component } from 'react';
import { CircleMarker, Tooltip } from 'react-leaflet';

class Marker extends Component {
    state = {
        position: [this.props.lat, this.props.lon]
    };

    render() {
        return (
            <CircleMarker center={this.state.position} radius={10}>
                <Tooltip direction="right" offset={[-8, -2]} opacity={1}>
                    <span>{this.props.name}</span>
                    <hr />
                    <span>{this.props.address}</span>
                </Tooltip>
            </CircleMarker>
        );
    }
}

export default Marker;
