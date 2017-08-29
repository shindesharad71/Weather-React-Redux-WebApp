import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Charts from '../components/chart';

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humadities = cityData.list.map(weather => weather.main.humadity);

        return(
            <tr key={ name }>
                <td>{ name }</td>
                <td><Charts data={ temps } color="orange" unit="C"/></td>
                <td><Charts data={ pressures } color="green" unit="hPa"/></td>
                <td><Charts data={ humadities } color="blue" unit="%"/></td>
            </tr>
        );
    }

    render() {
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temprature (C)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humadity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    { this.props.weather.map(this.renderWeather) }
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);