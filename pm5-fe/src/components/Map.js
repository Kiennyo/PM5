import React from 'react'
import { render } from 'react-dom'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import axios from "axios"
import L from "react-leaflet"

export default class Map extends React.Component {

  state() {
    
  }

componentDidMount = () => {
  axios.get('/pollution')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));
}

render() {


}
}