import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Header, Footer } from './components';
import { AreaPage, HomePage, Login, AdminPage } from './pages';

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/Area/:namaGedung/:id" element={<AreaPage />} />
				<Route path="/UPerVR/admin/login" element={<Login />} />
				<Route path="/UPerVR/admin/dashboard" element={<AdminPage />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
