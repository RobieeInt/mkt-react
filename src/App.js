import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import Cart from './pages/Cart';
import Success from './pages/Success';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/categories/:code_sku" component={Details} />
					<Route path="/cart" component={Cart} />
					<Route path="/success" component={Success} />
					<Route path="*" component={NotFound} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
