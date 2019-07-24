import React from "react";
import { Button } from "reactstrap";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";

function Overview() {
	return (
		<>
			<div id="home">
				<div id="video_box">
					<div id="video_overlays">
						<div className="container-overlay">
							<div className="row row-video">
								<div className="col-8 offset-2">
									<h4>爱克萨</h4>
									<h2>我们关心中国每一位老年人的身心健康。</h2>
									<h2>引入日本最先进的护理技术与人工智能科技。</h2>
									<p>
										I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or
										double click me to add your own content and make changes to the font.
									</p>
									<br />
									<Button className="btn-lg btn-primary">瞧一瞧我们的产品</Button>
								</div>
							</div>
						</div>
					</div>
					<img className="container-video" src="http://ucom-school.com/archives/001/201608/large-57b2c8f2c71f4.jpg" />
				</div>
			</div>
		</>
	);
}

function About({ item }) {
	return (
		<>
			<div className="container home-section" id="about">
				<div className="row">
					<div className="col-12 col-sm-6 col-md-5 offset-md-1">
						<img className="leader-img" src={item.image} alt={item.name} />
					</div>
					<div className="col-12 col-sm-6 col-md-5">
						<h5 className="text-primary">关于我们</h5>
						<h1>{item.name}</h1>
						{item.designation ? <h5>{item.designation}</h5> : null}
						<p>{item.description}</p>
						<br />
						<Button className="btn-lg btn-primary">阅读更多</Button>
					</div>
				</div>
			</div>
		</>
	);
}

function Service() {
	return (
		<>
			<div className="container home-section" id="service">
				<div className="row home-section row-header row-service align-self-center text-center align-middle">
					<div className="container">
						<h5>Services</h5>
						<h2>To Solve Issues</h2>
						<h2>in an Aging Society</h2>
					</div>
				</div>
				<div className="row row-header home-section">
					<div className="col-12 col-md-6 col-service-sub ml-0" style={{ "background-color": "#FFD8C7" }}>
						<h3>养老</h3>
						<p>
							I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double
							click me to add your own content and make changes to the font.
						</p>
						<div class="btn-center">
							<Button className="btn-lg btn-primary">阅读更多</Button>
						</div>
					</div>
					<div className="col-12 col-md-6 col-service-sub mr-0" style={{ "background-color": "#CEECFB" }}>
						<h3>医疗</h3>
						<p>
							I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double
							click me to add your own content and make changes to the font.
						</p>
						<div class="btn-center">
							<Button className="btn-lg btn-primary">阅读更多</Button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

function Partners({ partners }) {
	function RenderPartner({ partner }) {
		return (
			<div className="col-4 col-md-3 col-partner">
				<div className="row row-partner-img">
					<img src={partner.image} alt={partner.name} />
				</div>
				<h6>{partner.name}</h6>
				<p>{partner.location}</p>
			</div>
		);
	}

	const featuredPartners = partners.map(partner => {
		return <RenderPartner partner={partner} />;
	});

	return (
		<>
			<div className="container home-section">
				<div className="row home-section row-header align-self-center text-center align-middle">
					<div className="container">
						<h5 className="text-primary">合作伙伴</h5>
						<div className="d-flex justify-content-center">{featuredPartners}</div>
					</div>
				</div>
			</div>
		</>
	);
}

function Home(props) {
	return (
		<>
			<Overview />
			<About item={props.leader} />
			<Service />
			<Partners partners={props.partners} />
		</>
	);
}

export default Home;
