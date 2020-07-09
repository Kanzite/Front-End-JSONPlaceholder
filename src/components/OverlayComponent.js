import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

class Overlay extends Component {

	constructor(props) {
		super(props);

		this.state = {
			show: true
		}

	}

	handleChange(id) {
		var value = this.state.show;
		this.setState({ show: !value })
	}

	renderData() {
		if(this.props.showlist === true) {
			if(this.props.users.length === 0)
				return <section className="overlaysubhead"> No Users Found! </section>
			else
				return(this.props.users.map((user, i) => (
					<CSSTransition key = {i} in={true} classNames="fade" enter={false} exit={false} appear={true} timeout={1000}>
						<section key={i} className="user" style={{"transitionDelay": `${ i * 0.1 }s` }} onClick={this.handleChange.bind(this, user.id)}>
							<section className="userinner"> {user.username} </section>
						</section>
					</CSSTransition>
				)));
		}
		else {
			return(
				<div>
					<CSSTransition in={true} classNames="fade" enter={false} exit={false} appear={true} timeout={1000}>
						<section className="overlayhead"> Loading Content! </section>
					</CSSTransition>
					<CSSTransition in={true} classNames="fade" enter={false} exit={false} appear={true} timeout={1000}>
						<section className="overlaysubhead"> please wait </section>
					</CSSTransition>
				</div>
			);
		}
	}

	overlayInstance() {
		if(this.state.show === true && this.props.showlist === true) {
			return(
				<CSSTransition key = {1} in={true} classNames="translateright" enter={false} exit={false} appear={true} timeout={1000}>
					<div className="overlaywrapper in">
						<CSSTransition in={true} classNames="fade" enter={false} exit={false} appear={true} timeout={1000}>
							<section className="overlayhead"> Select Username </section>
						</CSSTransition>
							<section className="userhome"> { this.renderData() } </section>
					</div>
				</CSSTransition>
			);
		}
		else if(this.state.show === true && this.props.showlist === false) {
			return(
				<CSSTransition key = {1} in={true} classNames="translateright" enter={false} exit={false} appear={true} timeout={1000}>
					<div className="overlaywrapper in">
						<CSSTransition in={true} classNames="fade" enter={false} exit={false} appear={true} timeout={1000}>
							<section className="overlayhead"> Loading Content! </section>
						</CSSTransition>
						<CSSTransition in={true} classNames="fade" enter={false} exit={false} appear={true} timeout={1000}>
							<section className="overlaysubhead"> please wait </section>
						</CSSTransition>
					</div>
				</CSSTransition>
			);
		}
		else if(this.state.show === false && this.props.showlist === false) {
			return(
				<CSSTransition key = {2} in={true} classNames="translateleft" enter={false} exit={false} appear={true} timeout={1000}>
					<div className="overlaywrapper up">
						<CSSTransition in={true} classNames="fade" enter={false} exit={false} appear={true} timeout={1000}>
							<section className="overlayhead"> Loading Content! </section>
						</CSSTransition>
						<CSSTransition in={true} classNames="fade" enter={false} exit={false} appear={true} timeout={1000}>
							<section className="overlaysubhead"> please wait </section>
						</CSSTransition>
					</div>
				</CSSTransition>
			);
		}
		else if(this.state.show === false && this.props.showlist === true) {
			return(
				<CSSTransition key = {2} in={true} classNames="translateleft" enter={false} exit={false} appear={true} timeout={1000}>
					<div className="overlaywrapper up">
						<CSSTransition in={true} classNames="fade" enter={false} exit={false} appear={true} timeout={1000}>
							<section className="overlayhead"> Select Username </section>
						</CSSTransition>
							<section className="userhome"> { this.renderData() } </section>
					</div>
				</CSSTransition>
			);
		}
	}

	render() {
		return(
			<div>
				{ this.overlayInstance() }
			</div>
		);
	}

}

export default Overlay;