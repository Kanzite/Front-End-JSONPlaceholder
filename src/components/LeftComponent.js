import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

class Left extends Component {

	render() {

		return(
			<CSSTransition in={true} classNames="fademain" enter={false} exit={false} appear={true} timeout={1000}>
				<div>
					<section className="texthead"> View User Details </section>
					<section className="textsubhead"> select a user or search for one </section>
					<input type="text" className="textinp" name="username" placeholder="Search Username" value={this.props.username} onChange={this.props.handleInputChange}/>
					<i class="usericon fas fa-users"></i>
					<section className="two textsubhead"> ~ made with <a href="https://jsonplaceholder.typicode.com/" className="footerlink"> JSONPlaceholder </a> API ~ </section>
				</div>
			</CSSTransition>
		);
	}

}

export default Left;