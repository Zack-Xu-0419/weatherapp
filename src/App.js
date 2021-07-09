import React from "react"
import WeatherCard from "./Components/WeatherCard"

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      longitude: "Loading...",
      latitude: "Loading..."
    }

  }

  componentDidMount() {
    const self = this
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        self.setState({ longitude: position.coords.latitude, latitude: position.coords.longitude })
      })
    }
    else {
      console.log("Browser doesn't support location")
    }
  }

  render() {
    return (<div>

      <h1>Longitude: {this.state.longitude}</h1>
      <h1>Latitude: {this.state.latitude}</h1>
      <WeatherCard 
        icon="09d"
        name="Chengdu"
        temperature="30"
        description="light rain"
        feelsLike="99"
      />

      
    </div>)
  }
}

export default App;
