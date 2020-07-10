import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

class Overlay extends Component {

	renderData() {
		if(this.props.showlist === true) {
			if(this.props.users.length === 0)
				return <section className="overlaysubhead"> No Users Found! </section>
			else
				return(this.props.users.map((user, i) => (
					<CSSTransition key = {i} in={true} classNames="fade" enter={false} exit={false} appear={true} timeout={1000}>
						<section key={i} className="user" style={{"transitionDelay": `${ i * 0.1 }s` }} onClick={this.props.renderDetails.bind(this, user.id)}>
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
		if(this.props.show === true && this.props.showlist === true) {
			return(
				<CSSTransition key = {1} in={true} classNames="translateright" enter={false} exit={false} appear={true} timeout={1000}>
					<div className="overlaywrapper in">
						<CSSTransition in={true} classNames="fade" enter={false} exit={false} appear={true} timeout={1000}>
							<section className="overlayhead"> Select Username </section>
						</CSSTransition>
						<CSSTransition in={true} classNames="fade" enter={false} exit={false} appear={true} timeout={1000}>
							<section className="userhome"> { this.renderData() } </section>
						</CSSTransition>
					</div>
				</CSSTransition>
			);
		}
		else if(this.props.show === true && this.props.showlist === false) {
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
		else if(this.props.show === false && this.props.showlist === false) {
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
		else if(this.props.show === false && this.props.showlist === true) {
			return(
				<CSSTransition key = {2} in={true} classNames="translateleft" enter={false} exit={false} appear={true} timeout={1000}>
					<div className="overlaywrapper up">
						<CSSTransition in={true} classNames="fade" enter={false} exit={false} appear={true} timeout={1000}>
							<section className="overlayhead"> Select Username </section>
						</CSSTransition>
						<CSSTransition in={true} classNames="fade" enter={false} exit={false} appear={true} timeout={1000}>
							<input type="text" className="textinptwo" name="username" placeholder="Search Username" value={this.props.username} onChange={this.props.handleInputChange}/>
						</CSSTransition>
						<CSSTransition in={true} classNames="fade" enter={false} exit={false} appear={true} timeout={1000}>
							<section className="userhome"> { this.renderData() } </section>
						</CSSTransition>
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