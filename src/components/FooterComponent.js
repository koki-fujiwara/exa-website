import React from "react";
import { Jumbotron } from "reactstrap";
import { NavLink } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";

function Footer() {
	return (
		<>
			<div className="container" id="footer">
				<Jumbotron className="container-bottom">
					<div className="row justify-content-center">
						<div className="col-5">
							<h5>联系我们</h5>
							<address>
								121, Clear Water Bay Road
								<br />
								Clear Water Bay, Kowloon
								<br />
								HONG KONG
								<br />
								<i className="fa fa-phone fa-lg" />: +852 1234 5678
								<br />
								<i className="fa fa-fax fa-lg" />: +852 8765 4321
								<br />
								<i className="fa fa-envelope fa-lg" />: <a href="mailto:info@exa.com">info@exa.com</a>
							</address>
						</div>
						<div className="col-7">
							<h5>链接</h5>
							<ul className="list-unstyled">
								<li>
									<NavLink className="nav-link nav-a" to="/home">
										<Link to="home" smooth={true} offset={-70} duration={500}>
											主页
										</Link>
									</NavLink>
								</li>
								<li>
									<NavLink className="nav-link nav-a" to="/home">
										<Link to="about" smooth={true} offset={-70} duration={500}>
											关于我们
										</Link>
									</NavLink>
								</li>
								<li>
									<NavLink className="nav-link nav-a" to="/home">
										<Link to="service" smooth={true} duration={500}>
											产品
										</Link>
									</NavLink>
								</li>
								<li>
									<NavLink className="nav-link nav-a" to="/home">
										<Link to="footer" smooth={true} offset={-70} duration={500}>
											联系我们
										</Link>
									</NavLink>
								</li>
							</ul>
						</div>
					</div>
				</Jumbotron>
			</div>

			<div className="row justify-content-center row-footnote">
				<div className="col-auto">
					<p>©︎Copyright 2019 爱克萨老龄健康有限公司</p>
				</div>
			</div>
		</>
	);
}

export default Footer;
