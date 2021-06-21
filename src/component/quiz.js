import React from 'react';
import Answer from "./answer";
import title from '../data/title';
import styles from '../css/module/quiz.module.scss';

function Quiz(props) {

	let answer = null;
	if (props.answer != null) {
		answer = <Answer data={props.data} solved={props.answer === props.data.rightAnswerIdx}/>
	}
	let options = props.data.options.map((value, i) => {
		return (
			<li className={styles.optionItem} key={i}>
				<label className={`${styles.label} ${props.answer === i ? styles.checkedLabel : null}`}>
					<input type="radio" name="quiz" value={i}
						   onChange={() => props.onChange(i)}
						   checked={props.answer === i}
						   disabled={props.answer != null}
					/>{value}
				</label>
			</li>
		);
	});
	return (
		<section className={styles.section}>
			<h1 className={styles.title}>{title[props.type]}クイズ</h1>
			<h2 className={styles.title2}>だい{props.number}もん</h2>
			<p className={styles.question}>{props.data.question}</p>
			<ul className={styles.options}>
				{options}
			</ul>
			{answer}
		</section>
	)
}

export default Quiz;