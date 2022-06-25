import React, { useState, useEffect } from 'react';
import { Container, Card } from 'react-bootstrap';
import axios from 'axios';
import {
	AreaCard,
	InfoCard,
	TutorialCard,
	ExplainCard,
} from '../../components';

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
			<ExplainCard />
			<div>
				<h1>NANTI DISINI ADA VIRTUAL TOURNYA</h1>
			</div>
			<div></div>
			{area.map((item) => (
				<div
					key={item.id}
					style={{
						display: 'flex',
						flexWrap: 'wrap',
						justifyContent: 'center',
					}}
				>
					<div>
						<img src={item.image} style={{ width: '18rem' }}></img>
						<h3>{item.namaGedung}</h3>
					</div>
				</div>
			))}
			{/*nyari cara supaya mappingnya bisa masuk kedalam component card*/}
			<AreaCard />
			<InfoCard />
			<TutorialCard />
		</Container>
	);
};

export default Home;
