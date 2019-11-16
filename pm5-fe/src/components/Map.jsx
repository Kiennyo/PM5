import React, { Component } from "react";

class Map extends Component {
    state = {
        title: "map"
    };

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
            </div>
        );
    }
}

export default Map;
