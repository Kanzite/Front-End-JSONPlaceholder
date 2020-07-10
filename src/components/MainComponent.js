import React, { Component } from 'react';
import Overlay from './OverlayComponent';
import Left from './LeftComponent';
import Right from './RightComponent';
import { connect } from 'react-redux';
import { fetchUsers, fetchUserDetails } from '../redux/ActionCreators';

const mapDispatchToProps = dispatch => ({
	fetchUsers: () => dispatch(fetchUsers()),
	fetchUserDetails: (id) => dispatch(fetchUserDetails(id))
});

const mapStateToProps = state => {
	return {
		users: state.users,
		userdetails: state.userdetails
	}
}

class Main extends Component {

	constructor(props) {
		super(props);

		this.state = {
			username: '',
			displayedusers: [],
			show: true,
			flag: false
		}

		this.handleInputChange = this.handleInputChange.bind(this);
		this.renderDetails = this.renderDetails.bind(this);
	}

	handleInputChange(event) {
		var target = event.target;
		var value = target.value;

		var displayedusers = this.props.users.users.filter((user) => {
			return user.username.toLowerCase().indexOf(value.toLowerCase()) !== -1;
		})

		this.setState({
			username: value,
			displayedusers: displayedusers,
			flag: true
		});
	}

	renderDetails(id) {
		this.setState({ show: false });
		this.props.fetchUserDetails(id);
	}

	componentDidMount() {
		this.props.fetchUsers();
	}

	render() {
		return (
			<div className="wrapper">
				<div className="intro">
				<Overlay username={this.state.username} displayedusers={this.state.displayedusers} users={this.props.users} show={this.state.show} handleInputChange={this.handleInputChange} renderDetails={this.renderDetails} flag={this.state.flag}/>
					<div className="containerwrapper">
						<section className="left">
							<Left username={this.state.username} handleInputChange={this.handleInputChange}/>
						</section>
						<section className="right">
							<Right userdetails={this.props.userdetails} renderDetails={this.renderDetails}/>
						</section>
					</div>
				</div>
			</div>
	);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
