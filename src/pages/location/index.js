import React, { useState, useEffect } from 'react';
import { VRTour, TutorialCard, GedungCard } from '../../components';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const AreaPage = () => {
	const [gedung, setGedung] = useState([]);
	const [fasilitas, setFasilitas] = useState([]);
	const params = useParams();
	console.log(params);
	const fetchApi = async () => {
		axios
			.get('http://localhost:8000/fasilitas')
			.then((response) => setFasilitas(response.data));
	};
	useEffect(() => {
		fetchApi();
	}, []);
	return (
		<Container fluid="sm">
			<GedungCard name={params.namaGedung} />
			<VRTour />
			<TutorialCard />
		</Container>
	);
};

export default AreaPage;
