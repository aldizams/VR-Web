import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';

const Home = () => {
	const [area, setArea] = useState([]);

	const fetchApi = async () => {
		axios
			.get('http://localhost:8000/gedung')
			.then((response) => setArea(response.data));
	};
	useEffect(() => {
		fetchApi();
	}, []);
	return (
		<Container fluid="sm">
			<h1>aku keren</h1>
			{area.map((item) => (
				<div key={item.id}>
					<img src={item.image}></img>
					<h3>{item.namaGedung}</h3>
				</div>
			))}
			{/*nyari cara supaya mappingnya bisa masuk kedalam component card*/}
		</Container>
	);
};

export default Home;
