import React from "react";

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

export default Answer;