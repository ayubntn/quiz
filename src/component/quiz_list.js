import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Layout from "./layout";
import Start from "./start";
import Result from "./result";

import shinkansenData from "../data/shinkansen";
import dinosaurData from "../data/dinosaur";

class QuizList extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			shinkansenAnswers: Array(shinkansenData.length).fill(null),
			dinosaurAnswers: Array(dinosaurData.length).fill(null),
		};
	}

	handleChangeShinkansen(quizIndex, answer) {
		let answers = this.state.shinkansenAnswers.slice();
		answers[quizIndex] = answer;
		this.setState({
			shinkansenAnswers: answers,
		})
	}

	handleChangeDinosaur(quizIndex, answer) {
		let answers = this.state.dinosaurAnswers.slice();
		answers[quizIndex] = answer;
		this.setState({
			dinosaurAnswers: answers,
		})
	}

	resetAnswers() {
		this.setState({
			shinkansenAnswers: Array(shinkansenData.length).fill(null),
			dinosaurAnswers: Array(dinosaurData.length).fill(null),
		});
	}

	render() {

		return (
			<div className={'quizList'}>
				<Router>
					<div>
						<Switch>
							<Route path='/quiz' render={() =>
								<Start resetAnswers={() => this.resetAnswers()}/>
							}/>
							<Route path='/shinkansen/result'
								   render={() => <Result
									   type={'shinkansen'}
									   data={shinkansenData}
									   answers={this.state.shinkansenAnswers}
								   />}
							/>
							<Route
								path="/shinkansen/:id"
								render={({location, match}) => <Layout
									type={'shinkansen'}
									match={match}
									data={shinkansenData}
									answers={this.state.shinkansenAnswers}
									onChange={(quizIndex, answer) => this.handleChangeShinkansen(quizIndex, answer)}
								/>}
							/>
							<Route path='/dinosaur/result'
								   render={() => <Result
									   type={'dinosaur'}
									   data={dinosaurData}
									   answers={this.state.dinosaurAnswers}
								   />}
							/>
							<Route
								path="/dinosaur/:id"
								render={({location, match}) => <Layout
									type={'dinosaur'}
									match={match}
									data={dinosaurData}
									answers={this.state.dinosaurAnswers}
									onChange={(quizIndex, answer) => this.handleChangeDinosaur(quizIndex, answer)}
								/>}
							/>
						</Switch>
					</div>
				</Router>
			</div>
		);
	}
}

export default QuizList;