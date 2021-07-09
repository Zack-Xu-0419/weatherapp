import React from "react"
import GetWeather from "./Components/GetWeather"
import "./App.css"

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      longitude: "Loading...",
      latitude: "Loading...",
      currentweather: [],
      gpsEnabled: false,
      name: "Chengdu"
    }
  }

  componentDidMount() {
    
  }

  render() {
    return <div className="App">
      <GetWeather/>
    </div>
      
  }
}

export default App;
