import React from 'react';
import Answer from "./answer";
import title from '../data/title';

class Quiz extends React.Component {
	render() {
		let answer = null;
		if (this.props.answer != null) {
			answer = <Answer data={this.props.data} solved={this.props.answer === this.props.data.rightAnswerIdx}/>
		}
		let options = this.props.data.options.map((value, i) => {
			return (
				<li key={i}>
					<label>
						<input type="radio" name="quiz" value={i}
							   onChange={() => this.props.onChange(i)}
							   checked={this.props.answer === i}
							   disabled={this.props.answer != null}
						/>{value}
					</label>
				</li>
			);
		});
		return (
			<section>
				<p>{title[this.props.type]}クイズ</p>
				<h2>だい{this.props.number}もん</h2>
				<p>{this.props.data.question}</p>
				<ul>
					{options}
				</ul>
				{answer}
			</section>
		)
	}
}

export default Quiz;