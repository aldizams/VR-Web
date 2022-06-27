import React, { useState, useEffect } from 'react';
import { Container, Card } from 'react-bootstrap';
import axios from 'axios';
import {
	AreaCard,
	InfoCard,
	TutorialCard,
	ExplainCard,
	VRTour,
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
		<Container
			fluid="sm"
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexWrap: 'wrap',
			}}
		>
			<ExplainCard />
			<VRTour />
			<InfoCard />
			<div
				style={{
					display: 'flex',
					flexWrap: 'wrap',
					justifyContent: 'space-around',
					alignItems: 'center',
				}}
			>
				{area.map((item) => (
					<AreaCard key={item.id} bg={item.image} name={item.namaGedung} />
				))}
			</div>
			{/*nyari cara supaya mappingnya bisa masuk kedalam component card*/}
		</Container>
	);
};

export default Home;
