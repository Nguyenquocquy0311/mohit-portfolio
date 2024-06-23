import React from "react";
import { SkillBars } from "../portfolio";
import { Container, Row, Progress, Col } from "reactstrap";

import { Fade } from "react-reveal";

import GreetingLottie from "../components/DisplayLottie";

const Proficiency = () => {
	return SkillBars && (
		<div className="bg-gradient-info">
			<Container className="section section-lg">
			<Fade bottom duration={2000} >
				<Row>
					<Col lg="6">
						<h1 className="h1 text-white text-bold">Proficiency</h1>
						{SkillBars.map((skill) => {
							return (
								<div
									className="progress-info"
									key={skill.Stack}
								>
									<div className="progress-label">
										<span className="text-white">{skill.Stack}</span>
									</div>
									<div className="progress-percentage text-white">
										<span>{skill.progressPercentage}%</span>
									</div>
									<Progress
										max="100"
										value={skill.progressPercentage}
										color="black"
										role="progressbar"
										aria-label={skill.Stack}
									/>
								</div>
							);
						})}
					</Col>
					<Col lg="6">
						<GreetingLottie animationPath="/lottie/build.json" />
					</Col>
				</Row>
			</Fade>
		</Container>
		</div>
	);
};

export default Proficiency;
