/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./layout";
import Start from "./start";
import Result from "./result";
import { css } from "@emotion/react";
import * as globalStyle from "../global_style";

import shinkansenData from "../data/shinkansen";
import dinosaurData from "../data/dinosaur";

function QuizList(props) {
	const wrapperStyle = css`
		max-width: ${globalStyle.contentWidth};
		margin: auto;
	`;

	const [shinkansenAnswers, setShinkansenAnswers] = useState(
		Array(shinkansenData.length).fill(null)
	);
	const [dinosaurAnswers, setDinosaurAnswers] = useState(
		Array(dinosaurData.length).fill(null)
	);

	const handleChangeShinkansen = (quizIndex, answer) => {
		let answers = shinkansenAnswers.slice();
		answers[quizIndex] = answer;
		setShinkansenAnswers(answers);
	};

	const handleChangeDinosaur = (quizIndex, answer) => {
		let answers = dinosaurAnswers.slice();
		answers[quizIndex] = answer;
		setDinosaurAnswers(answers);
	};

	const resetAnswers = () => {
		setShinkansenAnswers(Array(shinkansenData.length).fill(null));
		setDinosaurAnswers(Array(dinosaurData.length).fill(null));
	};

	return (
		<div css={wrapperStyle}>
			<Router>
				<div>
					<Switch>
						<Route
							path="/quiz"
							render={() => (
								<Start resetAnswers={() => resetAnswers()} />
							)}
						/>
						<Route
							path="/shinkansen/result"
							render={() => (
								<Result
									type={"shinkansen"}
									data={shinkansenData}
									answers={shinkansenAnswers}
								/>
							)}
						/>
						<Route
							path="/shinkansen/:id"
							render={() => (
								<Layout
									type={"shinkansen"}
									data={shinkansenData}
									answers={shinkansenAnswers}
									onChange={(quizIndex, answer) =>
										handleChangeShinkansen(
											quizIndex,
											answer
										)
									}
								/>
							)}
						/>
						<Route
							path="/dinosaur/result"
							render={() => (
								<Result
									type={"dinosaur"}
									data={dinosaurData}
									answers={dinosaurAnswers}
								/>
							)}
						/>
						<Route
							path="/dinosaur/:id"
							render={() => (
								<Layout
									type={"dinosaur"}
									data={dinosaurData}
									answers={dinosaurAnswers}
									onChange={(quizIndex, answer) =>
										handleChangeDinosaur(quizIndex, answer)
									}
								/>
							)}
						/>
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default QuizList;
