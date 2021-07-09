import React from "react"
import { Card, Icon, Image } from 'semantic-ui-react'

const styles = {
    image:{
        textAlign: 'center',
        height: '217px',
        padding: '70px'
    }
}


class WeatherCard extends React.Component {
    render() {

        const props = this.props
        console.log(props)

        return (
            <div className="WeatherCard">
                <Card>
                    <Image as="i" className={"owi owi-5x owi-" + props.icon} style={styles.image} />
                    <Card.Content>
                        <Card.Header>{props.name} - {props.temperature} C°</Card.Header>
                        <Card.Meta>
                            <span className='date'>{props.description}</span>
                        </Card.Meta>
                        <Card.Description>
                            Feels like: {props.feelsLike} C°
                        </Card.Description>
                    </Card.Content>
                </Card>
            </div>
        )
    }
}

export default WeatherCard