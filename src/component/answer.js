import React from "react";
import styles from '../css/answer.module.scss';

class Answer extends React.Component {
	render() {
		let title = 'ざんねん！';
		if (this.props.solved) {
			title = 'せいかい！'
		}
		return (
			<div className={styles.answer}>
				<p className={styles.title}>{title}</p>
				<p className={styles.rightAnswer}>こたえ {this.props.data.options[this.props.data.rightAnswerIdx]}</p>
				<p className={styles.description}>{this.props.data.description}</p>
			</div>
		)
	}
}

export default Answer;