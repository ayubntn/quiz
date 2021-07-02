/** @jsxImportSource @emotion/react */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Quiz from "./quiz";
import { css } from "@emotion/react";
import * as globalStyle from "../global_style";
import * as theme from "../theme";

function Layout(props) {
	let color = theme.shinkansen.color;
	if (props.type === "dinosaur") {
		color = theme.dinosaur.color;
	}

	const layoutStyle = css`
		margin-bottom: 100px;
	`;

	const nextBtnStyle = css`
		margin-top: 30px;
		text-align: center;
	`;

	const btnStyle = css`
		${globalStyle.btn}
		background-color: ${color.accent};
	`;

	const headerHomeStyle = css`
		i {
			margin-right: 5px;
		}
	`;

	const headerBeforeStyle = css`
		i {
			margin-right: 5px;
		}
	`;

	const headerNextStyle = css`
		i {
			margin-left: 5px;
		}
	`;
	const { params } = props.match;
	const currentNumber = Number(params.id);
	const index = Number(params.id) - 1;

	let beforeLink;
	if (currentNumber === 1) {
		beforeLink = (
			<Link to="/quiz" css={headerHomeStyle}>
				<i className="fas fa-home" />
				さいしょ
			</Link>
		);
	} else {
		beforeLink = (
			<Link
				to={"/" + props.type + "/" + (currentNumber - 1)}
				css={headerBeforeStyle}
			>
				<i className="fas fa-arrow-left" />
				まえ
			</Link>
		);
	}

	let nextLink;
	let nextBtn;
	if (currentNumber === props.data.length) {
		nextLink = <Link to={"/" + props.type + "/result"}>けっか</Link>;
		nextBtn = (
			<Link css={btnStyle} to={"/" + props.type + "/result"}>
				けっか
			</Link>
		);
	} else {
		nextLink = (
			<Link
				to={"/" + props.type + "/" + (currentNumber + 1)}
				css={headerNextStyle}
			>
				つぎ
				<i className="fas fa-arrow-right" />
			</Link>
		);
		nextBtn = (
			<Link
				css={btnStyle}
				to={"/" + props.type + "/" + (currentNumber + 1)}
			>
				つぎ
			</Link>
		);
	}

	return (
		<div css={layoutStyle}>
			<nav css={headerStyle(color)}>
				{beforeLink}
				{nextLink}
			</nav>
			<Quiz
				number={currentNumber}
				type={props.type}
				data={props.data[index]}
				answer={props.answers[index]}
				onChange={(answer) => props.onChange(index, answer)}
			/>
			<div css={nextBtnStyle}>
				{props.answers[index] != null ? nextBtn : null}
			</div>
			<nav css={footerStyle(color)}>
				<div css={progressStyle(color)}>
					<progress
						max="100"
						value={(currentNumber / props.data.length) * 100}
					>
						{(currentNumber / props.data.length) * 100}
					</progress>
				</div>
			</nav>
		</div>
	);
}

export default Layout;

function headerStyle(color) {
	const headerStyle = css`
		display: flex;
		height: ${globalStyle.headerHeight};
		align-content: center;
		a {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 50%;
			height: 100%;
			color: #fff;
			background-color: ${color.accent};

			&:first-of-type {
				border-right: 1px solid;
			}
		}
	`;
	return headerStyle;
}

function footerStyle(color) {
	const footerStyle = css`
		position: fixed;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 100%;
		max-width: ${globalStyle.contentWidth};
		height: ${globalStyle.headerHeight};
		background-color: ${color.accent};
		border-top: 2px solid ${color.accent};
	`;
	return footerStyle;
}

function progressStyle(color) {
	const progressRadiuls = "15px";
	const progressBgc = color.base;
	const progressBar = color.point;
	const progressStyle = css`
		display: flex;
		height: 100%;
		justify-content: center;
		align-items: center;

		progress {
			width: 80%;
			border-radius: ${progressRadiuls};
			background-color: ${progressBgc};

			&::-webkit-progress-bar {
				border-radius: ${progressRadiuls};
				background-color: ${progressBgc};
			}

			&::-webkit-progress-value {
				border-radius: ${progressRadiuls};
				background-color: ${progressBar};
				transition: all 0.3s;
			}

			&::-moz-progress-bar {
				border-radius: ${progressRadiuls};
				background-color: ${progressBar};
			}

			&::-ms-fill {
				border-radius: ${progressRadiuls};
				background-color: ${progressBar};
			}
		}
	`;

	return progressStyle;
}
