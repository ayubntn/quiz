import React from 'react';
import {Link} from 'react-router-dom';
import Quiz from './quiz';
import styles from '../css/module/layout.module.scss';

function Layout(props) {

	const {params} = props.match;
	const currentNumber = Number(params.id);
	const index = Number(params.id) - 1;

	let beforeLink;
	if (currentNumber === 1) {
		beforeLink = <Link to="/quiz" className={styles.headerHome}><i className="fas fa-home"/>さいしょ</Link>
	} else {
		beforeLink = <Link to={'/' + props.type + '/' + (currentNumber - 1)} className={styles.headerBefore}>
			<i className="fas fa-arrow-left"/>まえ</Link>
	}

	let nextLink;
	let nextBtn;
	if (currentNumber === props.data.length) {
		nextLink = <Link to={'/' + props.type + '/result'}>けっか</Link>;
		nextBtn = <Link className={styles.btn} to={'/' + props.type + '/result'}>けっか</Link>;
	} else {
		nextLink = <Link to={'/' + props.type + '/' + (currentNumber + 1)} className={styles.headerNext}>つぎ<i
			className="fas fa-arrow-right"/></Link>;
		nextBtn = <Link className={styles.btn} to={'/' + props.type + '/' + (currentNumber + 1)}>つぎ</Link>;
	}

	return (
		<div className={styles.layout}>
			<nav className={styles.header}>
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
			<div className={styles.nextBtn}>
				{props.answers[index] != null ? nextBtn : null}
			</div>
			<nav className={styles.footer}>
				<div className={styles.progress}>
					<progress max="100"
							  value={currentNumber / props.data.length * 100}>
						{currentNumber / props.data.length * 100}
					</progress>
				</div>
			</nav>
		</div>
	);
}

export default Layout;