import React, { Component } from "react";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import About from "./AboutComponent";
import Footer from "./FooterComponent";
import Service from "../views/ServiceComponent";
import Email from "../views/EmailComponent";
import { LEADERS } from "../shared/leaders";
import { PARTNERS } from "../shared/partners";
import {Switch, Route, Redirect, Router} from "react-router-dom";
import ScrollToTop from '../views/ScrollToTopComponent';
class Main extends Component {
	constructor(props) {
		super(props);

		this.state = {
			leaders: LEADERS,
			partners: PARTNERS
		};
	}
	render() {
		const HomePage = () => {
			return (
				<Home
					leader={this.state.leaders.filter(leader => leader.featured)[0]}
					partners={this.state.partners.filter(partner => partner.featured)}
				/>
			);
		};

		const AboutPage = () => {
			return <About leaders={this.state.leaders} />;
		};
		return (
			<div>
				<Header />
				<div>
					<ScrollToTop>
                    <Switch>
                        <Route path="/home" component={HomePage} />
                        <Route path="/aboutus" component={AboutPage} />
                        <Route path="/service" component={Service} />
                        <Route path="/email" component={Email} />
                        <Redirect to="/home" />
                    </Switch>
					</ScrollToTop>
				</div>
				<Footer />
			</div>
		);
	}
}

export default Main;
