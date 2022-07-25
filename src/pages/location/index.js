import React, { useState, useEffect } from 'react';
import {
	VRTour,
	TutorialCard,
	GedungCard,
	FasilitasCard,
} from '../../components';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import bg from '../../assets/img/bg-sc.png';

const AreaPage = () => {
	const [gedung, setGedung] = useState([]);
	const [fasilitas, setFasilitas] = useState([]);
	const params = useParams();
	console.log(params);
	const fetchApi = async () => {
		axios.get(`http://localhost:8000/gedung/${params.id}`).then((response) => {
			setGedung(response.data);
		});

		axios.get(`http://localhost:8000/fasilitas/`).then((response) => {
			setFasilitas(response.data);
		});
	};
	console.log(fasilitas);
	console.log(params.namaGedung);
	console.log(gedung.namaGedung);
	useEffect(() => {
		fetchApi();
	}, [params]);
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
						flexDirection: 'column',
					}}
				>
					<GedungCard
						name={gedung.namaGedung}
						img={gedung.image}
						exp={gedung.penjelasan}
					/>
					<VRTour />
				</Container>
			</div>
			<Container
				fluid="sm"
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexWrap: 'wrap',
					flexDirection: 'column',
				}}
			>
				<TutorialCard />
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						flexWrap: 'wrap',
					}}
				>
					{fasilitas.map((item) => (
						<FasilitasCard
							nama={fasilitas.namaFasilitas}
							exp={fasilitas.penjelasan}
							img={fasilitas.image}
							id={fasilitas.id}
						/>
					))}
				</div>

				{/* {fasilitas
					.filter((item) => item.idGedung === params.id)
					.map((filteredFasilitas) => (
						<FasilitasCard
							nama={filteredFasilitas.namaFasilitas}
							exp={filteredFasilitas.penjelasan}
							img={filteredFasilitas.image}
							id={filteredFasilitas.id}
						/>
					))} */}
			</Container>
		</>
	);
};

export default AreaPage;
