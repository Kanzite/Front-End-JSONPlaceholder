import React, { Component } from 'react';
import './App.css';
import Overlay from './components/OverlayComponent';
import Left from './components/LeftComponent';
import Right from './components/RightComponent';

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			username: '',	
			users: [],
			displayedusers: [],
			showlist: false
		}

		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(event) {
		var target = event.target;
		var value = target.value;

		var displayedusers = this.state.users.filter((el) => {
			return el.username.toLowerCase().indexOf(value.toLowerCase()) !== -1;
		})

		this.setState({
			username: value,
			displayedusers: displayedusers
		});
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(response => response.json())
			.then(users => this.setState({ users: users, displayedusers: users, showlist: true }));
	}

	render() {
		return (
		<div className="main">
			<div className="wrapper">
				<div className="intro">
				<Overlay username={this.state.username} users={this.state.displayedusers} showlist={this.state.showlist}/>
					<div className="containerwrapper">
						<section className="left">
							<Left username={this.state.username} handleInputChange={this.handleInputChange}/>
						</section>
						<section className="right">
							<Right />
						</section>
					</div>
				</div>
			</div>
		</div>
	);
	}
}

export default App;
