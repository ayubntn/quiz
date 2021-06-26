/** @jsxImportSource @emotion/react */
import React from "react";
import { useHistory } from "react-router-dom";
import shinkansenIcon from "../image/icon_shinkansen.svg";
import fossilIcon from "../image/icon_fossil.svg";
import { css } from "@emotion/react";
import * as globalStyle from "../global_style";
import * as theme from "../theme";

function Start(props) {
	const history = useHistory();
	const titleStyle = css(
		globalStyle.pageTitle,
		css`
			//color: red;
		`
	);
	const buttonGroupStyle = css(
		css`
			margin-top: 10px;
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
		`
	);

	const buttonStyle = css`
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 30px;
		width: 80%;
		background-color: #eee;
		font-size: 24px;
		font-weight: 700;
		height: 86px;
		border-radius: 20px;
		border: 6px solid #666;

		& > img {
			width: 50px;
			height: 50px;
			margin-right: 20px;
		}
	`;

	const shinkansenBtnStyle = css(
		buttonStyle,
		css`
			border-color: ${theme.shinkansen.color.accent};
			background-color: ${theme.shinkansen.color.base};
		`
	);

	const dinosaurBtnStyle = css(
		buttonStyle,
		css`
			border-color: ${theme.dinosaur.color.accent};
			background-color: ${theme.dinosaur.color.base};
		`
	);

	function handleLink(path) {
		props.resetAnswers();
		history.push(path);
	}

	return (
		<section
			css={css`
				margin-top: 40px;
			`}
		>
			<h1 css={titleStyle}>クイズにちょうせん！</h1>
			<div css={buttonGroupStyle}>
				<button
					css={shinkansenBtnStyle}
					onClick={() => {
						handleLink("/shinkansen/1");
					}}
				>
					<img src={shinkansenIcon} alt="" />
					しんかんせん
				</button>
				<button
					css={dinosaurBtnStyle}
					onClick={() => {
						handleLink("/dinosaur/1");
					}}
				>
					<img src={fossilIcon} alt="" />
					きょうりゅう
				</button>
			</div>
		</section>
	);
}

export default Start;
