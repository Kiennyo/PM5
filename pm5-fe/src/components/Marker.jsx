import React, { Component } from 'react';
import { CircleMarker, Tooltip } from 'react-leaflet';

class Marker extends Component {
    state = {
        position: [this.props.lat, this.props.lon],
        random: Math.floor(Math.random() * 30) + 5,
        polutV1: this.props.polutV1,
        polutV2: this.props.polutV2,
        polutV3: this.props.polutV3,
        polutV4: this.props.polutV4,
    };

    render() {
        return (
            <CircleMarker center={this.state.position} radius={this.state.random} color="grey">
                <Tooltip direction="right" offset={[-8, -2]} opacity={1}>
                    <span>{this.props.name}</span>
                    <hr />
                    <span>{this.props.address}</span>
                    <br />
                    <hr />
                    <span>{this.state.random}% non green energy.</span>
                </Tooltip>
            </CircleMarker>
        );
    }
}

export default Marker;
