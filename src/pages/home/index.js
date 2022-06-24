import React, { useState, useEffect } from 'react';
import { Container, Card } from 'react-bootstrap';
import bg from '../../assets/img/bg-upce.png';
import axios from 'axios';
import { AreaCard, InfoCard, TutorialCard } from '../../components';

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
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<h1 style={{ marginRight: '9px', textAlign: 'left' }}>
					Virtual <br></br> Tour
				</h1>
				<Card style={{ width: '20rem', borderRadius: '0%' }}>
					{/*Perlu benerin border radius, sama tulisan virtual tournya, dibikin komponen2 aja yaaa */}
					<Card.Body
						style={{
							backgroundImage: `url(${bg})`,
							backgroundRepeat: 'no-repeat',
							backgroundPosition: 'center',
							backgroundSize: 'cover',
						}}
					>
						This is some text within a card body.
					</Card.Body>
				</Card>
			</div>
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
