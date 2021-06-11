import React from 'react';
import Answer from "./answer";
import title from '../data/title';
import styles from '../css/module/quiz.module.scss';

class Quiz extends React.Component {
	render() {
		let answer = null;
		if (this.props.answer != null) {
			answer = <Answer data={this.props.data} solved={this.props.answer === this.props.data.rightAnswerIdx}/>
		}
		let options = this.props.data.options.map((value, i) => {
			return (
				<li className={styles.optionItem} key={i}>
					<label className={`${styles.label} ${this.props.answer === i ? styles.checkedLabel : null}`}>
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
			<section className={styles.section}>
				<h1 className={styles.title}>{title[this.props.type]}クイズ</h1>
				<h2 className={styles.title2}>だい{this.props.number}もん</h2>
				<p className={styles.question}>{this.props.data.question}</p>
				<ul className={styles.options}>
					{options}
				</ul>
				{answer}
			</section>
		)
	}
}

export default Quiz;