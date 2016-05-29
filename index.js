import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

import Components from './components'

console.log(Components)

render(
	<Router history={browserHistory}>
		<Route path="/" component={Components.Layout}>
			<IndexRoute component={Components.Home} />
			<Route path="about" component={Components.About}/>
			<Route path="users" component={Components.Users}>
				<Route path="/user/:userId" component={Components.User}/>
			</Route>
			<Route path="*" component={Components.NoFound}/>
		</Route>
	</Router>

, document.getElementById('app'))
