import React, {Component} from 'react';
import Clock from './Clock';
import {Form, FormControl, Button} from 'react-bootstrap'
import './App.css';

// Main Component App
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			deadline: 'December 25, 2017',
			newDeadline: ''
		}
	}

	// Method to update deadline date through the input field submit
	changeDeadline() {
		this.setState({deadline: this.state.newDeadline})
	}

	render() {
		return (
			<div className="app">
				<div className="app-title">
					Countdown to {this.state.deadline}
				</div>
				<Clock 
					deadline={this.state.deadline}
				/>{/* Countdown clock component */}
				<Form inline>
					<FormControl
						className="deadline-input"
						placeholder="New date here"
						onChange={event => this.setState({newDeadline: event.target.value})}
					/>
					<Button onClick={() => this.changeDeadline()}>Submit</Button>								
				</Form >
			</div>
		)
	}
}

export default App;