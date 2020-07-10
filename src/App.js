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
			showlist: false,
			show: true,
			showdetails: false,
			userdetails: {
				user: { username: 'Loading' },
				post: { },
				album: { },
				photos: []
			}
		}

		this.handleInputChange = this.handleInputChange.bind(this);
		this.renderDetails = this.renderDetails.bind(this);
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

	renderDetails(id) {
		this.setState({ show: false, showdetails: false });
		var userdetails = {...this.state.userdetails};
		fetch("https://jsonplaceholder.typicode.com/users/" + id)
			.then(response => response.json())
			.then((user) => {
				userdetails.user = user;
				fetch("https://jsonplaceholder.typicode.com/posts?userId=" + id)
		 			.then(response => response.json())
					.then((posts) => {
						userdetails.post = posts[0];
						fetch("https://jsonplaceholder.typicode.com/albums?userId=" + id)
							.then(response => response.json())
							.then((albums) => {
								userdetails.album = albums[0];
								fetch("https://jsonplaceholder.typicode.com/photos?albumId=" + userdetails.album.id)
									.then(response => response.json())
									.then((photos) => {
										userdetails.photos = photos;
										this.setState({ userdetails: userdetails, showdetails: true });
									});
							});
					});
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
				<Overlay username={this.state.username} users={this.state.displayedusers} show={this.state.show} showlist={this.state.showlist} handleInputChange={this.handleInputChange} renderDetails={this.renderDetails}/>
					<div className="containerwrapper">
						<section className="left">
							<Left username={this.state.username} handleInputChange={this.handleInputChange}/>
						</section>
						<section className="right">
							<Right showdetails={this.state.showdetails} userdetails={this.state.userdetails} renderDetails={this.renderDetails}/>
						</section>
					</div>
				</div>
			</div>
		</div>
	);
	}
}

export default App;
