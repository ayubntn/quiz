import React from "react";
import {Link} from 'react-router-dom';
import title from '../data/title';
import styles from '../css/result.module.scss';

class Result extends React.Component {

	scoring() {
		return this.props.answers.filter((answer, i) => {
			return answer === this.props.data[i].rightAnswerIdx
		}).length;
	}

	render() {
		const score = this.scoring();
		const name = title[this.props.type];
		let special;
		if (score === this.props.data.length) {
			special = <p className={styles.special}>きみは {name}はかせ だ！</p>;
		} else {
			special = <p className={styles.special}>また あそんでね</p>;
		}
		return (
			<div className={styles.result}>
				<h1 className={styles.title}>{name}クイズ</h1>
				<h2 className={styles.title2}>けっか</h2>
				<p className={styles.text}>
					<strong className={styles.number}>{this.props.data.length}</strong>もんちゅう<br/>
					<strong className={styles.number}>{score}</strong>もん せいかい</p>
				{special}
				<div className={styles.back}>
					<Link className="btn" to="/quiz">もどる</Link>
				</div>
			</div>
		)
	}
}

export default Result;