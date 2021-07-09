import axios from "axios"
import React from "react"
import WeatherCard from "./WeatherCard"
import { Button, Icon, Input } from "semantic-ui-react"
import "../App.css"

class GetWeather extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            weather: {},
            main: {},
            all: {},
            name: "Chengdu",
            gpsEnabled: false
        }

        this.setGPS = this.setGPS.bind(this)

        this.changeCity = this.changeCity.bind(this)
    }

    componentDidMount() {
        this.getData()
        const self = this
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                self.setState({ longitude: position.coords.longitude, latitude: position.coords.latitude })
            })
        }

        else {
            console.log("Browser doesn't support location")
        }
    }

    getData() {
        const self = this
        if (this.state.gpsEnabled === true) {
            axios.get("https://api.openweathermap.org/data/2.5/weather?lat=" + this.state.latitude + "&lon=" + this.state.longitude + "&appid=45ebc38311972be87df6b3da347c5fcd&units=metric").then(
                function (response) {
                    self.setState({ weather: response.data.weather[0] })
                    self.setState({ main: response.data.main })
                    self.setState({ all: response.data })
                    self.setState({ sys: response.data.sys })
                    console.log(self.state.sys)
                }
            )
        } else {
            axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + this.state.name + "&appid=45ebc38311972be87df6b3da347c5fcd&units=metric").then(
                function (response) {
                    self.setState({ weather: response.data.weather[0] })
                    self.setState({ main: response.data.main })
                    self.setState({ all: response.data })
                    self.setState({ sys: response.data.sys })
                    console.log(self.state.sys)
                }
            )
        }
    }


    async setGPS(){
        await this.setState({ gpsEnabled: true })
        this.getData()
        console.log("SetGPS")
    }

    async changeCity(ev) {
        await this.setState({ name: ev.target.value, gpsEnabled: false })
        this.getData()
    }


    render() {
        return (
            <div className="WeatherCard">
                <Button className='search' onClick={this.setGPS}>
                    <Icon name="location arrow" />
                </Button>
                <h1>Longitude: {this.state.longitude}</h1>
                <h1>Latitude: {this.state.latitude}</h1>
                <div>
                    <Input className="search" onChange={this.changeCity} value={this.state.name} />
                </div>

                <WeatherCard
                    icon={this.state.weather.icon}
                    name={this.state.all.name}
                    temperature={this.state.main.temp}
                    description={this.state.weather.description}
                    feelsLike={this.state.main.feels_like}
                />
            </div>
        )
    }
}
export default GetWeather