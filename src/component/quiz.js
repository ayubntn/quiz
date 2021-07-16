/** @jsxImportSource @emotion/react */
import React from "react";
import Answer from "./answer";
import title from "../data/title";
import { css } from "@emotion/react";
import * as globalStyle from "../global_style";
import * as theme from "../theme";

function Quiz(props) {
	let color = theme.shinkansen.color;
	if (props.type === "dinosaur") {
		color = theme.dinosaur.color;
	}

	const sectionStyle = css`
		width: 90%;
		margin: auto;
		padding-top: 30px;
	`;

	const questionStyle = css`
		margin-top: 30px;
		line-height: 1.6;
	`;

	const questionsStyle = css`
		margin-top: 30px;

		li {
			position: relative;
			margin-top: 20px;
		}
	`;

	const labelStyle = (i) =>
		css(
			css`
				display: block;
				background-color: ${color.base};
				padding: 20px 20px 20px 50px;
				border-radius: 10px;

				input {
					display: none;
				}

				&::before,
				&::after {
					content: "";
					position: absolute;
					top: 50%;
					left: 15px;
					transform: translateY(-50%);
				}

				&::before {
					background-color: ${color.accent};
					width: 24px;
					height: 24px;
					border-radius: 50%;
				}
			`,
			props.answer === i &&
				css`
					&::after {
						content: "\\f00c";
						${globalStyle.fontAwesome}
						color: #fff;
						left: 19px;
						font-size: 16px;
					}
				`
		);

	let answer = null;
	if (props.answer != null) {
		answer = (
			<Answer
				data={props.data}
				solved={props.answer === props.data.rightAnswerIdx}
			/>
		);
	}
	let options = props.data.options.map((value, i) => {
		return (
			<li key={i}>
				<label css={labelStyle(i)}>
					<input
						type="radio"
						name="quiz"
						value={i}
						onChange={() => props.onChange(i)}
						checked={props.answer === i}
						disabled={props.answer != null}
					/>
					{value}
				</label>
			</li>
		);
	});
	return (
		<section css={sectionStyle}>
			<h1
				css={css(
					globalStyle.subTitle,
					css`
						color: ${color.accent};
					`
				)}
			>
				{title[props.type]}クイズ
			</h1>
			<h2
				css={css(
					globalStyle.pageTitle,
					css`
						margin-top: 10px;
						color: ${color.accent};
					`
				)}
			>
				だい{props.number}もん
			</h2>
			<p css={questionStyle}>{props.data.question}</p>
			<ul css={questionsStyle}>{options}</ul>
			{answer}
		</section>
	);
}

export default Quiz;
