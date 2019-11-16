import React from "react";
import { Map, CircleMarker, Tooltip, TileLayer} from "react-leaflet";

export default class MapComponent extends React.Component {
    state = {
        lez: {
            lat: 55.694,
            lng: 21.1957,
            zoom: 14
        },
        pmi: {
            lat: 55.6967,
            lng: 21.2002,
            zoom: 14
        },
        mars: {
            lat: 55.7027,
            lng: 21.3613,
            zoom: 14
        },
        gb: {
            lat: 55.691043,
            lng: 21.202709,
            zoom: 14
        },
        ogp: {
            lat: 55.690574,
            lng: 21.210001,
            zoom: 14
        },
        rb: {
            lat: 55.688269,
            lng: 21.201974,
            zoom: 14
        }
    };

    render() {
        const position = [this.state.lez.lat, this.state.lez.lng];
        const pmi = [this.state.pmi.lat, this.state.pmi.lng];
        const mars = [this.state.mars.lat, this.state.mars.lng];
        const gb = [this.state.gb.lat, this.state.gb.lng];
        const ogp = [this.state.ogp.lat, this.state.ogp.lng];
        const rb = [this.state.rb.lat, this.state.rb.lng];

        return (
            <div className=".leaflet-container">
                <Map center={position} zoom={this.state.lez.zoom}>
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <CircleMarker
                        center={position}
                        radius={50}
                    >
                        <Tooltip
                            direction="right"
                            offset={[-8, -2]}
                            opacity={1}
                        >
                            <span>
                                LEZ
                            </span>
                        </Tooltip>
                    </CircleMarker>
                    <CircleMarker
                        center={pmi}
                        radius={5}
                    >
                        <Tooltip
                            direction="right"
                            offset={[-8, -2]}
                            opacity={1}
                        >
                            <span>
                                Philip Morris Lietuva
                            </span>
                        </Tooltip>
                    </CircleMarker>
                    <CircleMarker
                        center={mars}
                        radius={10}
                    >
                        <Tooltip
                            direction="right"
                            offset={[-8, -2]}
                            opacity={1}
                        >
                            <span>
                                Mars
                            </span>
                        </Tooltip>
                    </CircleMarker>
                    <CircleMarker
                        center={gb}
                        radius={30}
                    >
                        <Tooltip
                            direction="right"
                            offset={[-8, -2]}
                            opacity={1}
                        >
                            <span>
                                Glassbel Baltic, UAB
                            </span>
                        </Tooltip>
                    </CircleMarker>
                    <CircleMarker
                        center={ogp}
                        radius={15}
                    >
                        <Tooltip
                            direction="right"
                            offset={[-8, -2]}
                            opacity={1}
                        >
                            <span>
                                Orion Global Pet, UAB
                            </span>
                        </Tooltip>
                    </CircleMarker>
                    <CircleMarker
                        center={rb}
                        radius={25}
                    >
                        <Tooltip
                            direction="right"
                            offset={[-8, -2]}
                            opacity={1}
                        >
                            <span>
                                RETAL Baltic, UAB
                            </span>
                        </Tooltip>
                    </CircleMarker>
                </Map>
            </div>
        );
    }
}
