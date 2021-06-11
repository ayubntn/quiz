import React from 'react';
import {useHistory} from 'react-router-dom';
import styles from '../css/module/start.module.scss';
import shinkansenIcon from '../image/icon_shinkansen.svg';
import fossilIcon from '../image/icon_fossil.svg';

function Start(props) {
	const history = useHistory();

	function handleLink(path) {
		props.resetAnswers();
		history.push(path);
	}

	return (
		<section className={styles.section}>
			<h1 className={styles.title}>クイズにちょうせん！</h1>
			<div className={styles.btnGroup}>
				<button onClick={() => {
					handleLink("/shinkansen/1")
				}}><img src={shinkansenIcon} className={styles.btnIcon}/>しんかんせん
				</button>
				<button onClick={() => {
					handleLink("/dinosaur/1")
				}}><img src={fossilIcon} className={styles.btnIcon}/>きょうりゅう
				</button>
			</div>
		</section>
	);
}

export default Start;