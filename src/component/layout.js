import React from 'react';
import {Link} from 'react-router-dom';
import Quiz from './quiz';

class Layout extends React.Component {

	render() {
		const {params} = this.props.match;
		const currentNumber = Number(params.id);
		const index = Number(params.id) - 1;

		let beforeLink;
		if (currentNumber === 1) {
			beforeLink = <Link to="/quiz">さいしょ</Link>
		} else {
			beforeLink = <Link to={'/' + this.props.type + '/' + (currentNumber - 1)}>まえ</Link>
		}

		let nextLink;
		let nextBtn;
		if (currentNumber === this.props.data.length) {
			nextLink = <Link to={'/' + this.props.type + '/result'}>けっか</Link>;
			nextBtn = <Link to={'/' + this.props.type + '/result'}>けっか</Link>;
		} else {
			nextLink = <Link to={'/' + this.props.type + '/' + (currentNumber + 1)}>つぎ</Link>;
			nextBtn = <Link to={'/' + this.props.type + '/' + (currentNumber + 1)}>つぎ</Link>;
		}

		const answeredCount = this.props.answers.filter(value => value != null).length;

		return (
			<div>
				<nav>
					{beforeLink}
					{nextLink}
				</nav>
				<Quiz
					number={currentNumber}
					type={this.props.type}
					data={this.props.data[index]}
					answer={this.props.answers[index]}
					onChange={(answer) => this.props.onChange(index, answer)}
				/>
				{this.props.answers[index] != null ? nextBtn : null}
				<nav>
					<progress max="100"
							  value={answeredCount / this.props.data.length * 100}>
						{answeredCount / this.props.data.length * 100}
					</progress>
				</nav>
			</div>
		);
	}
}

export default Layout;