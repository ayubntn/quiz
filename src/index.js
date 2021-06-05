import React from 'react';
import ReactDOM from 'react-dom';

class Answer extends React.Component {
	render() {
		let title = 'ざんねん！';
		if (this.props.solved) {
			title = 'せいかい！'
		}
		return (
			<div>
				<p>{title}</p>
				<p>こたえ {this.props.data.options[this.props.data.rightAnswerIdx]}</p>
				<p>{this.props.data.description}</p>
			</div>
		)
	}
}

class Quiz extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			answer: null
		};
	}

	setAnswer(value) {
		this.setState({answer: value});
	}

	render() {
		let answer = null;
		if (this.state.answer != null) {
			answer = <Answer data={data} solved={this.state.answer === this.props.data.rightAnswerIdx} />
		}
		let options = this.props.data.options.map((value, i) => {
			return (
				<li key={i}>
					<label>
						<input type="radio" name="quiz1" value={i}
							   onChange={() => this.setAnswer(i)}
							   disabled={this.state.answer != null}
						/>{value}
					</label>
				</li>
			);
		});
		return (
			<section>
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

const data = {
	question: 'E5けい はやぶさは さいこうじそく なんキロメートルで はしるかな？',
	options: ['280キロメートル', '320キロメートル', '350キロメートル'],
	rightAnswerIdx: 1,
	description: 'にほんで いちばん はやく はしれるよ！H5けい はやぶさと E6けい こまちの さいこうじそくも 320キロメートルだよ。'
};

ReactDOM.render(<Quiz number={1} data={data}/>, document.getElementById("root"));