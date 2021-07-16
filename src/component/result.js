/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import title from "../data/title";
import { css } from "@emotion/react";
import * as globalStyle from "../global_style";
import * as theme from "../theme";

import donmai from "../image/result_donmai.png";
import yourBest from "../image/result_your_best.png";
import great from "../image/result_great.png";
import congrats from "../image/result_congrats.png";

const rankImages = {
	expert: congrats,
	pro: great,
	beginner: yourBest,
	baby: donmai,
};

function Result(props) {
	let color = theme.shinkansen.color;
	if (props.type === "dinosaur") {
		color = theme.dinosaur.color;
	}

	const resultStyle = css`
		text-align: center;
		padding-top: 30px;
	`;

	const titleStyle = css`
		${globalStyle.subTitle}
		color: ${color.accent}
	`;

	const title2Style = css`
		margin-top: 10px;
		${globalStyle.pageTitle}
		color: ${color.accent}
	`;

	const textStyle = css`
		margin-top: 30px;
	`;

	const specialStyle = css`
		margin-top: 30px;
	`;

	const backStyle = css`
		margin-top: 30px;
		@include btn;
		${globalStyle.btn}
		background-color: ${color.accent}
	`;

	const numberStyle = css`
		font-size: 30px;
		font-weight: 700;
		color: ${color.point};
	`;

	const resultImageStyle = css`
		margin-top: 30px;
		img {
			width: 200px;
		}
	`;

	const [score, setScore] = useState(scoring(props));
	const [rank, setRank] = useState(ranking(props, score));
	const name = title[props.type];
	let special;
	if (rank === "expert") {
		special = <p css={specialStyle}>きみは {name}はかせ だ！</p>;
	} else {
		special = <p css={specialStyle}>また あそんでね</p>;
	}
	return (
		<div css={resultStyle}>
			<h1 css={titleStyle}>{name}クイズ</h1>
			<h2 css={title2Style}>けっか</h2>
			<p css={textStyle}>
				<strong css={numberStyle}>{props.data.length}</strong>
				もんちゅう
				<br />
				<strong css={numberStyle}>{score}</strong>もん せいかい
			</p>
			{special}
			<div css={resultImageStyle}>
				<img src={rankImages[rank]} />
			</div>
			<Link css={backStyle} to="/">
				もどる
			</Link>
		</div>
	);
}

function scoring(props) {
	return props.answers.filter((answer, i) => {
		return answer === props.data[i].rightAnswerIdx;
	}).length;
}

function ranking(props, score) {
	const per = (score / props.data.length) * 100;
	let rank = "baby";
	if (per === 100) {
		rank = "expert";
	} else if (per >= 66) {
		rank = "pro";
	} else if (per >= 33) {
		rank = "beginner";
	}
	return rank;
}

export default Result;
