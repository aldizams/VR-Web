import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Header } from './components';
import { Home } from './pages';

function App() {
	return (
		<div className="App">
			<Header />
			<Home />
		</div>
	);
}

export default App;
