/** @jsxImportSource @emotion/react */
import React, { useEffect } from "react";
import { css } from "@emotion/react";
import * as globalStyle from "../global_style";

function Answer(props) {
	const maruColor = "#00d2be";
	const batsuColor = "red";

	const answerStyle = css`
		margin-top: 30px;
		border: 4px solid ${props.solved ? maruColor : batsuColor};
		border-radius: 10px;
		padding: 20px 10px;
	`;

	const titleStyle = css`
		${globalStyle.pageTitle}
	`;

	const rightanswerStyle = css`
		margin-top: 20px;
		font-size: 25px;
		font-weight: 700;
	`;

	const descriptionStyle = css`
		margin-top: 20px;
		line-height: 1.6;
	`;

	const maru = css`
		margin-right: 10px;
		display: inline-block;
		width: 40px;
		height: 40px;
		border: 8px solid ${maruColor};
		border-radius: 50%;
		vertical-align: bottom;
	`;

	const batsu = css`
		margin-right: 10px;
		vertical-align: text-bottom;

		&::before {
			content: "\\f00d";
			${globalStyle.fontAwesome}
			font-size: 40px;
			color: ${batsuColor};
		}
	`;

	useEffect(() => {
		let element = document.documentElement;
		let bottom = element.scrollHeight - element.clientHeight;
		window.scroll({ top: bottom, behavior: "smooth" });
	});

	let title = "ざんねん！";
	if (props.solved) {
		title = "せいかい！";
	}
	return (
		<div css={answerStyle}>
			<p css={titleStyle}>
				<span css={props.solved ? maru : batsu} />
				{title}
			</p>
			<p css={rightanswerStyle}>
				こたえ {props.data.options[props.data.rightAnswerIdx]}
			</p>
			<p css={descriptionStyle}>{props.data.description}</p>
		</div>
	);
}

export default Answer;
