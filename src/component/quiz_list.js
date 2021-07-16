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

	const quizHash = {
		data: {
			shinkansen: shinkansenData,
			dinosaur: dinosaurData,
		},
		answer: {
			shinkansen: shinkansenAnswers,
			dinosaur: dinosaurAnswers,
		},
		handler: {
			shinkansen: handleChangeShinkansen,
			dinosaur: handleChangeDinosaur,
		},
	};

	const resetAnswers = () => {
		setShinkansenAnswers(Array(shinkansenData.length).fill(null));
		setDinosaurAnswers(Array(dinosaurData.length).fill(null));
	};

	return (
		<div css={wrapperStyle}>
			<Router basename="/quiz">
				<div>
					<Switch>
						<Route exact path="/">
							<Start resetAnswers={() => resetAnswers()} />
						</Route>

						<Route path="/shinkansen/result">
							<Result
								type="shinkansen"
								data={quizHash.data["shinkansen"]}
								answers={quizHash.answer["shinkansen"]}
							/>
						</Route>
						<Route path="/shinkansen/:id">
							<Layout
								type="shinkansen"
								data={quizHash.data["shinkansen"]}
								answers={quizHash.answer["shinkansen"]}
								onChange={(quizIndex, answer) =>
									quizHash.handler["shinkansen"](
										quizIndex,
										answer
									)
								}
							/>
						</Route>

						<Route path="/dinosaur/result">
							<Result
								type="dinosaur"
								data={quizHash.data["dinosaur"]}
								answers={quizHash.answer["dinosaur"]}
							/>
						</Route>
						<Route path="/dinosaur/:id">
							<Layout
								type="dinosaur"
								data={quizHash.data["dinosaur"]}
								answers={quizHash.answer["dinosaur"]}
								onChange={(quizIndex, answer) =>
									quizHash.handler["dinosaur"](
										quizIndex,
										answer
									)
								}
							/>
						</Route>

						<Route path="*">
							<Start resetAnswers={() => resetAnswers()} />
						</Route>
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default QuizList;
