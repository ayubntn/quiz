import React from 'react';
import {Link} from 'react-router-dom'
import Quiz from './quiz';

class Layout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			answers: Array(this.props.data.length).fill(null)
		};
	}

	handleChange(quizIndex, answer) {
		let answers = this.state.answers.slice();
		answers[quizIndex] = answer;
		this.setState({
			answers: answers,
		})
	}

	render() {
		const currentNumber = this.props.index + 1;

		let beforeLink;
		if (currentNumber === 1) {
			beforeLink = <Link to="/quiz">さいしょ</Link>
		} else {
			beforeLink = <Link to={"/shinkansen" + (currentNumber - 1)}>まえ</Link>
		}

		let nextLink;
		if (currentNumber === this.props.data.length) {

		} else {
			nextLink = <Link to={"/shinkansen" + (currentNumber + 1)}>つぎ</Link>
		}

		return (
			<div>
				<nav>
					{beforeLink}
					{nextLink}
				</nav>
				<Quiz
					number={currentNumber}
					data={this.props.data[this.props.index]}
					answer={this.state.answers[this.props.index]}
					onChange={(answer) => this.handleChange(this.props.index, answer)}
				/>
				<nav>
					<progress max="100"
							  value={this.props.index / this.props.data.length * 100}>
						{this.props.index / this.props.data.length * 100}
					</progress>
				</nav>
			</div>
		);
	}
}

export default Layout;