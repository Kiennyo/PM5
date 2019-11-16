import React, { Component } from "react";

class Map extends Component {
  state = {
    title: "map"
  };
  render() {
  const tags = {
    list: [
      { id: 1, name: "Philip Morris Lietuva", lat: 55.6967, lng: 21.2002 },
      { id: 2, name: "MARS", lat: 55.7027, lng: 21.3613 },
      { id: 3, name: "Glassbel Baltic, UAB", lat: 55.691043, lng: 21.202709 },
      { id: 4, name: "Orion Global Pet, UAB", lat: 55.690574, lng: 21.210001 },
      { id: 4, name: "RETAL Baltic, UAB", lat: 55.688269, lng: 21.201974 },
    ]
  };

    return (
      <div>
          <h1>{this.state.title}</h1>
        <ul>
          {tags.list.map(reptile => (
            <li>{reptile.name}</li>
          ))}
        </ul>
        
      </div>
    );
  }
}

export default Map;
