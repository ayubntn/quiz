import React from "react";
import {Link} from 'react-router-dom';
import title from '../data/title';
import styles from '../css/module/result.module.scss';

import donmai from '../image/result_donmai.png';
import yourBest from '../image/result_your_best.png';
import great from '../image/result_great.png';
import congrats from '../image/result_congrats.png';

const rankImages = {
	expert: congrats,
	pro: great,
	beginner: yourBest,
	baby: donmai
};

class Result extends React.Component {

	constructor(props) {
		super(props);
		const score = this.scoring();
		const rank = this.ranking(score);
		this.state = {
			score: score,
			rank: rank,
		};
	}

	scoring() {
		return this.props.answers.filter((answer, i) => {
			return answer === this.props.data[i].rightAnswerIdx
		}).length;
	}

	ranking(score) {
		const per = score / this.props.data.length * 100;
		let rank = 'baby';
		if (per === 100) {
			rank = 'expert';
		} else if (per >= 66) {
			rank = 'pro';
		} else if (per >= 33) {
			rank = 'beginner';
		}
		return rank;
	}

	render() {
		const score = this.state.score;
		const name = title[this.props.type];
		let special;
		if (this.state.rank === 'expert') {
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
				<div className={styles.resultImage}>
					<img src={rankImages[this.state.rank]}/>
				</div>
				<Link className={styles.back} to="/quiz">もどる</Link>

			</div>
		)
	}
}

export default Result;