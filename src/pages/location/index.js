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
	let hasil = [];
	const params = useParams();

	const fetchApi = async () => {
		axios.get(`http://localhost:8000/gedung/${params.id}`).then((response) => {
			setGedung(response.data);
		});

		axios.get(`http://localhost:8000/fasilitas/`).then((response) => {
			console.log(params.id);
			console.log(response.data.length);
			for (let i = 0; i < response.data.length; i++) {
				if (params.id == response.data[i].idGedung) {
					console.log(response.data[i].idGedung);
					hasil.push(response.data[i]);
				}
			}
			setFasilitas(hasil);
		});
	};

	useEffect(() => {
		fetchApi();
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
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
				<Container fluid="sm" className="container">
					<GedungCard
						name={gedung.namaGedung}
						img={gedung.image}
						exp={gedung.penjelasan}
					/>
					<VRTour style={{ zIndex: '1' }} link={gedung.linkTour} />
				</Container>
			</div>
			<Container fluid="sm" className="container">
				<TutorialCard />
			</Container>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexWrap: 'wrap',
				}}
				className="grayBgDivHomePage"
			>
				<Container
					fluid="sm"
					className="container"
					style={{ justifyContent: 'space-between' }}
				>
					{fasilitas.map((item, index) => (
						<FasilitasCard
							nama={item.namaFasilitas}
							exp={item.penjelasan}
							img={item.image}
							id={item.id}
							index={index}
						/>
					))}
				</Container>
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
		</>
	);
};

export default AreaPage;
