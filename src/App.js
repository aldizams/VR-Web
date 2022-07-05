import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Header, Footer } from './components';
import { AreaPage, HomePage } from './pages';

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/Area/:namaGedung/:id" element={<AreaPage />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
