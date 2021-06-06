import React from 'react';
import {useHistory} from 'react-router-dom';

function Start(props) {
	const history = useHistory();

	function handleLink(path) {
		props.resetAnswers();
		history.push(path);
	}
	return (
		<section>
			<h1>クイズにちょうせん！</h1>
			<button onClick={() => {
				handleLink("/shinkansen/1")
			}}>しんかんせん
			</button>
			<button onClick={() => {
				handleLink("/dinosaur/1")
			}}>きょうりゅう
			</button>
		</section>
	);
}

export default Start;