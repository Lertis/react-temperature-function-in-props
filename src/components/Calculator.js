import React from "react";
import TemperatureInput from "./TemperatueInput";
import { scaleNames } from "../configs/TemperatureScale";
import { toCelsius, toFahrenheit, tryConvert } from "../utils/calculations";

class Calculator extends React.Component {
	constructor(props) {
		super(props);
		this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
		this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
		this.state = { temperature: "", scale: scaleNames.c };
	}

	handleCelsiusChange(temperature) {
		this.setState({ scale: scaleNames.c, temperature });
	}

	handleFahrenheitChange(temperature) {
		this.setState({ scale: scaleNames.f, temperature });
	}

	render() {
		const scale = this.state.scale;
		const temperature = this.state.temperature;
		const celsius = scale === scaleNames.f ? tryConvert(temperature, toCelsius) : temperature;
		const fahrenheit = scale === scaleNames.c ? tryConvert(temperature, toFahrenheit) : temperature;
		return (
			<React.Fragment>
				<TemperatureInput scale={scaleNames.c} temperature={celsius} onTemperatureChange={this.handleCelsiusChange} />
				<TemperatureInput scale={scaleNames.f} temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange} />
			</React.Fragment>
		);
	}
}

export default Calculator;
