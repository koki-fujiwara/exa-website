import React, { Component } from "react";
import {
	Navbar,
	NavbarBrand,
	Nav,
	NavbarToggler,
	Collapse,
	NavItem,
	Jumbotron,
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	Form,
	FormGroup,
	Input,
	Label
} from "reactstrap";
import { NavLink } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
import Service from "./ServiceComponent";
import { Switch, Route, Redirect } from "react-router-dom";

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isNavOpen: false,
			isModalOpen: false
		};
		this.toggleNav = this.toggleNav.bind(this);
	}

	toggleNav() {
		this.setState({
			isNavOpen: !this.state.isNavOpen
		});
	}

	toggleContact() {
		this.setState({
			isNavOpen: !this.state.isNavOpen
		});
	}

	render() {
		const Pipe = () => {
			return (
				<>
					&nbsp;&nbsp;<span style={{ "font-size": "16px;" }}>|</span>&nbsp;&nbsp;
				</>
			);
		};
		return (
			<>
				<div className="container-fluid container-top">
					<div className="row">
						<div className="col-12 col-sm-4 d-flex align-items-center justify-content-center">
							<address>
								<i className="fa fa-phone fa-lg" />: +852 1234 5678
								<Pipe />
								<i className="fa fa-envelope fa-lg" />: <a href="mailto:info@exa.com">info@exa.com</a>
							</address>
						</div>
						<div className="col-12 col-sm-4 align-self-center text-center align-middle">
							<NavbarBrand className="mr-auto" href="/">
								<img src="assets/images/exa-logo-title.png" height="120" width="100" alt="Exawizards" />
							</NavbarBrand>
						</div>
						<div className="d-xs d-sm col-sm-4 d-flex align-items-center justify-content-center">
							<a className="btn btn-social-icon btn-google" href="http://google.com/+">
								<i className="fa fa-google-plus" />
							</a>
							<a className="btn btn-social-icon btn-facebook" href="http://facebook.com/+">
								<i className="fa fa-facebook" />
							</a>
							<a className="btn btn-social-icon btn-linkedin" href="http://linkedin.com/+">
								<i className="fa fa-linkedin" />
							</a>
							<a className="btn btn-social-icon btn-twitter" href="http://twitter.com/+">
								<i className="fa fa-twitter" />
							</a>
							<a className="btn btn-social-icon btn-instagram" href="http://instagram.com/+">
								<i className="fa fa-instagram" />
							</a>
						</div>
					</div>
				</div>

				<Navbar light expand="md">
					<div className="container-fluid">
						<div className="row mx-auto">
							<Collapse isOpen={this.state.isNavOpen} navbar>
								<Nav navbar>
									<NavItem>
										<NavLink className="nav-link nav-a" to="/home" smooth={true} offset={-70} duration={500}>
											{/*<Link className="nav-a" to="home" smooth={true} offset={-70} duration={500}>*/} 主页
											{/*</Link>*/}
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink className="nav-link" to="/aboutus">
											{/*<Link className="nav-a" to="aboutus" smooth={true} offset={-70} duration={500}>*/} 关于我们
											{/*</Link>*/}
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink className="nav-link nav-a" to="/service">
											{" "}
											产品
											{/*<Link className="nav-link nav-a" to="/service" smooth={true} duration={500}>
												{" "}
												产品
											</Link>*/}
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink className="nav-link nav-a" to="/email" smooth={true} offset={-70} duration={500}>
											{/*<Link className="nav-a" to="footer" smooth={true} offset={-70} duration={500}>
												{" "}*/}
											联系我们
											{/*</Link>*/}
										</NavLink>
									</NavItem>
								</Nav>
							</Collapse>
							<NavbarToggler onClick={this.toggleNav} />
						</div>
					</div>
				</Navbar>
			</>
		);
	}
}

export default Header;
