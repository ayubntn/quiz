import React, {useEffect} from "react";
import styles from '../css/module/answer.module.scss';

function Answer(props) {

	useEffect(() => {
		let element = document.documentElement;
		let bottom = element.scrollHeight - element.clientHeight;
		window.scroll({top: bottom, behavior: 'smooth'});
	});

	let title = 'ざんねん！';
	if (props.solved) {
		title = 'せいかい！'
	}
	return (
		<div className={styles.answer}>
			<p className={styles.title}><span className={props.solved ? styles.maru : styles.batsu}/>{title}</p>
			<p className={styles.rightAnswer}>こたえ {props.data.options[props.data.rightAnswerIdx]}</p>
			<p className={styles.description}>{props.data.description}</p>
		</div>
	)
}

export default Answer;