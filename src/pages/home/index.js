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
			<div className="blueBgDivHomePage">
				<Container fluid="sm" className="container">
					<ExplainCard />
					<VRTour style={{ zIndex: '1' }} />
				</Container>
			</div>
			<div className="redBgDivHomePage"></div>
			<Container fluid="sm" className="container">
				<TutorialCard />
				<InfoCard />
			</Container>
			<div className="grayBgDivHomePage">
				<Container fluid="sm" className="container">
					<div className="areaCardDiv">
						{area.map((item) => (
							<AreaCard
								key={item.id}
								bg={item.image}
								name={item.namaGedung}
								id={item.id}
							/>
						))}
					</div>
				</Container>
			</div>

			<Container fluid="sm" className="container">
				<hr className="hrLine" />
			</Container>

			{/*nyari cara supaya mappingnya bisa masuk kedalam component card*/}
		</>
	);
};

export default HomePage;
