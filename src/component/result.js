import React, {useState} from "react";
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

function Result(props) {

	const [score, setScore] = useState(scoring(props));
	const [rank, setRank] = useState(ranking(props, score));
	const name = title[props.type];
	let special;
	if (rank === 'expert') {
		special = <p className={styles.special}>きみは {name}はかせ だ！</p>;
	} else {
		special = <p className={styles.special}>また あそんでね</p>;
	}
	return (
		<div className={styles.result}>
			<h1 className={styles.title}>{name}クイズ</h1>
			<h2 className={styles.title2}>けっか</h2>
			<p className={styles.text}>
				<strong className={styles.number}>{props.data.length}</strong>もんちゅう<br/>
				<strong className={styles.number}>{score}</strong>もん せいかい</p>
			{special}
			<div className={styles.resultImage}>
				<img src={rankImages[rank]}/>
			</div>
			<Link className={styles.back} to="/quiz">もどる</Link>

		</div>
	)
}

function scoring(props) {
	return props.answers.filter((answer, i) => {
		return answer === props.data[i].rightAnswerIdx
	}).length;
}

function ranking(props, score) {
	const per = score / props.data.length * 100;
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

export default Result;