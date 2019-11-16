import React from 'react'

export default class Map extends React.Component {
    render() {
        return (
            <h1>map</h1>
        )
    }

    componentDidMount() {
        fetch('/pollution')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
    }
}