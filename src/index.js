import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import data from './quiz_data';
import Start from './component/start';
import Layout from './component/layout'

class ShinkansenQuiz extends React.Component {
	render() {
		let routes = [];
		for (let i = 0; i < data.length; i++) {
			routes.push(<Route key={i} path={'/shinkansen' + (i + 1)} render={() => <Layout index={i} data={data}/>}/>);
		}

		return (
			<div>
				<Router>
					<div>
						<Route path='/quiz' component={Start}/>
						{routes}
					</div>
				</Router>
			</div>
		);
	}
}

ReactDOM.render(<ShinkansenQuiz/>, document.getElementById("root"));