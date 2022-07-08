import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import {
	AreaCard,
	InfoCard,
	TutorialCard,
	ExplainCard,
	VRTour,
} from '../../components';
import bg from '../../assets/img/bg-sc.png';

const HomePage = () => {
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
		<>
			<div
				style={{
					backgroundImage: `url(${bg})`,
					backgroundPosition: 'center top',
					backgroundRepeat: 'no-repeat',
					backgroundSize: '100% 80%',
					border: 'none',
				}}
			>
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
					<VRTour style={{ zIndex: '1' }} />
				</Container>
			</div>
			<Container
				fluid="sm"
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexWrap: 'wrap',
				}}
			>
				<TutorialCard />
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
						<AreaCard
							key={item.id}
							bg={item.image}
							name={item.namaGedung}
							id={item.id}
						/>
					))}
				</div>

				<hr
					style={{
						width: '50%',
						textAlign: 'center',
						marginLeft: '0',
						height: '3px',
						color: '#084999',
						backgroundColor: '#084999',
						borderWidth: '0',
						display: 'block',
					}}
				/>

				{/*nyari cara supaya mappingnya bisa masuk kedalam component card*/}
			</Container>
		</>
	);
};

export default HomePage;
