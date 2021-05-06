import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Details from './pages/Details';
import Cart from './pages/Cart';
import Success from './pages/Success';
import NotFound from './pages/NotFound';
import Provider from './helpers/hook/useGlobalContext';

function App() {
	return (
		<Provider>
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/categories/:code_sku" component={Details} />
					<Route path="/categories/:code_sku/products/:idp" component={Details} />
					<Route path="/cart" component={Cart} />
					<Route path="/success" component={Success} />
					<Route path="*" component={NotFound} />
				</Switch>
			</Router>
		</Provider>
	);
}

export default App;
