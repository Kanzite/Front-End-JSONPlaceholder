import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

class Right extends Component {

	render() {
		if(this.props.showdetails === true) {
			return(
				<CSSTransition key = {1} in={true} classNames="fade" enter={false} exit={false} appear={true} timeout={1000}>
					<div>
						<section className="texthead"> {this.props.userdetails.user.username} </section>
						<CSSTransition in={true} classNames="fadeup" enter={false} exit={false} appear={true} timeout={4000}>
							<section className="righttext" style={{"transitionDelay": "0.25s" }}>
								<section className="ques"> Full Name: </section>
								<section className="ans"> {this.props.userdetails.user.name} </section>
								<section className="ques"> Phone: </section>
								<section className="ans"> {this.props.userdetails.user.phone} </section>
								<section className="ques"> Email: </section>
								<section className="ans"> {this.props.userdetails.user.email} </section>
							</section>
						</CSSTransition>
						<CSSTransition in={true} classNames="fadeup" enter={false} exit={false} appear={true} timeout={4000}>
							<section className="righttext" style={{"transitionDelay": "0.5s" }}>
								<img className="image" src={this.props.userdetails.photos[0].thumbnailUrl} alt={this.props.userdetails.photos[0].id} />
								<img className="image" src={this.props.userdetails.photos[1].thumbnailUrl} alt={this.props.userdetails.photos[1].id} />
								<img className="image" src={this.props.userdetails.photos[2].thumbnailUrl} alt={this.props.userdetails.photos[2].id} />
							</section>
						</CSSTransition>
						<CSSTransition in={true} classNames="fadeup" enter={false} exit={false} appear={true} timeout={4000}>
							<section className="righttext" style={{"transitionDelay": "0.75s" }}>
								<section className="card">
									<section className="questwo"> Top Post Title </section>
									<section className="anstwo"> {this.props.userdetails.post.title} </section>
								</section>
								<section className="card">
									<section className="questwo"> Top Album Title </section>
									<section className="anstwo"> {this.props.userdetails.album.title} </section>
								</section>
							</section>
						</CSSTransition>
						<CSSTransition in={true} classNames="fadeup" enter={false} exit={false} appear={true} timeout={4000}>
							<section className="navigation" style={{"transitionDelay": "1s" }}>
								<section class="back" onClick={this.props.renderDetails.bind(this, ((this.props.userdetails.user.id - 2 + 10) % 10) + 1)}> <i class='fas fa-angle-left'> </i> </section>
								<section class="navtext"> {this.props.userdetails.user.id} / 10 </section>
								<section class="forward" onClick={this.props.renderDetails.bind(this, ((this.props.userdetails.user.id) % 10) + 1)}> <i class='fas fa-angle-right'> </i> </section>
							</section>
						</CSSTransition>
					</div>
				</CSSTransition>
			);
		}
		else {
			return(
				<CSSTransition key = {2} in={true} classNames="fade" enter={false} exit={false} appear={true} timeout={1000}>
					<div>
						<section className="texthead"> Loading </section>
					</div>
				</CSSTransition>
			);
		}
	}

}

export default Right;