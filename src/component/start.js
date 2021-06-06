import React from 'react'
import {Link} from 'react-router-dom'

class Start extends React.Component {
	render() {
		return (
			<section>
				<h1>しんかんせんクイズ</h1>
				<Link to="/shinkansen1">スタート</Link>
			</section>
		);
	}
}

export default Start;