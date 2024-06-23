import React from "react";
import { experience } from "../portfolio";
import { Container, Row } from "reactstrap";

import { Fade } from "react-reveal";

import ExperienceCard from "../components/ExperienceCard";

const Experience = () => {
	return experience && (
		<section className="section section-lg bg-gradient-info">
			<Container>
				<div className="d-flex p-4">
					<div>
						<div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
							<i className="ni ni-briefcase-24 text-info" />
						</div>
					</div>
					<div className="pl-4">
						<h4 className="display-3 text-white">Experience</h4>
					</div>
				</div>
				<div className="d-flex p-4">
					<div className="pl-4">
						<h4 className="display-3 text-white">SilverAI Join Stock Company</h4>
						<span className="text-white">FrontEnd Developer</span>
						<p className="text-white">Sep 2023 – Jun 2024</p>
						<ul className="text-white">
							<li>Contributed to the development and maintenance of user interfaces for globally recognized photo editing websites including Snapedit, Remove-BG, and Dewatermark.</li>
							<ul>
								<li>Collaborated with the design team to implement new features and interfaces, ensuring a seamless user experience.</li>
								<li>Proactively identified and resolved bugs to maintain application stability.</li>
								<li>Additionally, coordinated with the SEO team to optimize website visibility for search engines.</li>
							</ul>
							<li>Technologies used:</li>
							<ul>
								<li>NextJS, Tailwind, CSS, Redux, ContextAPI.</li>
								<li>Firebase.</li>
							</ul>
						</ul>
					</div>
				</div>
				<Row className="row-grid align-items-start">
					{experience.map((data, i) => {
						return <ExperienceCard key={i} data={data} />;
					})}
				</Row>
			</Container>
		</section>
	);
};

export default Experience;
