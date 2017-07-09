import React, {Component} from 'react';
import Clock from './Clock';
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
				<div>
					<input
						placeholder="New date here"
						onChange={event => this.setState({newDeadline: event.target.value})}
					/>
					<button onClick={() => this.changeDeadline()}>Submit</button>								
				</div>
			</div>
		)
	}
}

export default App;