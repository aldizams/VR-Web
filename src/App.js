import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Header, Footer } from './components';
import { Home } from './pages';

function App() {
	return (
		<div className="App">
			<Header />
			<Home />
			<Footer />
		</div>
	);
}

export default App;
