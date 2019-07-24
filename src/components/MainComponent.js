import React, { Component } from "react";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import About from "./AboutComponent";
import Footer from "./FooterComponent";
import { LEADERS } from "../shared/leaders";
import { PARTNERS } from "../shared/partners";
import { Switch, Route, Redirect } from "react-router-dom";

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
				<Switch>
					<Route path="/home" component={HomePage} />
					<Route path="/aboutus" component={AboutPage} />
					<Redirect to="/home" />
				</Switch>
				<Footer />
			</div>
		);
	}
}

export default Main;
