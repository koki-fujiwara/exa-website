import React from "react";
import { Media } from "reactstrap";

function RenderLeader({ leader }) {
	return (
		<Media>
			<Media left href="#">
				<img src={leader.image} alt={leader.name} />
			</Media>
			<Media body className="ml-4">
				<Media heading>{leader.name}</Media>
				<h6>{leader.designation}</h6>
				<p>{leader.description}</p>
			</Media>
		</Media>
	);
}

function About(props) {
	const leaders = props.leaders.map(leader => {
		return <RenderLeader leader={leader} />;
	});

	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h2 className="text-primary">关于我们</h2>
						<div className="row row-content">
							<div className="col-12">
								<Media list>{leaders}</Media>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default About;
