import React from "react";
import styles from '../css/module/answer.module.scss';

class Answer extends React.Component {

	componentDidMount() {
		let element = document.documentElement;
		let bottom = element.scrollHeight - element.clientHeight;
		window.scroll({top: bottom, behavior: 'smooth'});
	}

	render() {
		let title = 'ざんねん！';
		if (this.props.solved) {
			title = 'せいかい！'
		}
		return (
			<div className={styles.answer}>
				<p className={styles.title}><span className={this.props.solved ? styles.maru : styles.batsu}/>{title}</p>
				<p className={styles.rightAnswer}>こたえ {this.props.data.options[this.props.data.rightAnswerIdx]}</p>
				<p className={styles.description}>{this.props.data.description}</p>
			</div>
		)
	}
}

export default Answer;