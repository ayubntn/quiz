import React from "react";
import {Link} from 'react-router-dom';
import title from '../data/title';

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
			special = <p>きみは {name}はかせ だ！</p>;
		} else {
			special = <p>また あそんでね</p>;
		}
		return (
			<div>
				<p>{name}クイズ</p>
				<h2>けっか</h2>
				<p>{this.props.data.length}もんちゅう{score}もん せいかい</p>
				{special}
				<Link to="/quiz">もどる</Link>
			</div>
		)
	}
}

export default Result;