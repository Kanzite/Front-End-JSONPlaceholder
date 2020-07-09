import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

class Right extends Component {

	constructor(props) {
		super(props);

		this.state = {
			fullname: '',
			username: '',
			password: ''
		}

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange(event) {
		var target = event.target;
		var value = target.value;
		var name = target.name;

		this.setState({
			[name]: value
		});
	}

	handleSubmit(event) {
		alert('Sign Up Successful');
		event.preventDefault();
	}

	render() {

		return(
			<CSSTransition in={true} classNames="fademain" enter={false} exit={false} appear={true} timeout={1000}>
				<div>
					<section className="texthead"> Sign Up </section>
					<section className="textsubhead"> create an account to get started </section>
					<form onSubmit={this.handleSubmit}>
						<input type="text" className="textinp" name="fullname" placeholder="Full Name" minLength="3" pattern="[a-zA-Z ]+" value={this.state.fullname} onChange={this.handleInputChange} required/>
						<input type="text" className="textinp" name="username" placeholder="Username" minLength="3" pattern="[a-zA-Z0-9 ]+" value={this.state.username} onChange={this.handleInputChange} required/>
						<input type="password" className="textinp" name="password" placeholder="Password" minLength="6" value={this.state.password} onChange={this.handleInputChange} required/>
						<button className="buttonsubmit"> Sign Up </button>
					</form>
				</div>
			</CSSTransition>
		);
	}

}

export default Right;