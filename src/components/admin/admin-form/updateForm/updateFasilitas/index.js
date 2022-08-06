import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateFasilitasForm = () => {
	const [data, setData] = useState([]);
	const params = useParams();
	const fetchApi = async () => {
		axios
			.get(`http://localhost:8000/fasilitas/${params.id}`)
			.then((response) => setData(response.data));
	};
	useEffect(() => {
		fetchApi();
	}, []);

	const modalSuccess = () => {
		Swal.fire({
			icon: 'success',
			title: 'Success',
		});
	};

	const [validated, setValidated] = useState(false);

	const handleSubmit = (event) => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		setValidated(true);
		if (validated == true) {
			modalSuccess();
		}
	};

	return (
		<div style={{ padding: '150px 0' }}>
			<div style={{ paddingBottom: '60px' }}>
				<h3 style={{ float: 'left', textDecoration: 'underline' }}>
					TAMBAH FASILITAS
				</h3>
			</div>
			<Form noValidate validated={validated} onSubmit={handleSubmit}>
				<Form.Group className="mb-3" controlId="validationNamaGedung">
					<Form.Label style={{ float: 'left' }}>Nama Fasilitas :</Form.Label>
					<Form.Control
						placeholder="fasilitas"
						// onChange={handleChange}
						// value={data.namaFasilitas}
						defaultValue={data.namaFasilitas}
						required
					/>
					<Form.Control.Feedback type="invalid">
						Nama Fasilitas Kosong!
					</Form.Control.Feedback>
				</Form.Group>

				<Form.Group className="mb-3" controlId="validationPenjelasanGedung">
					<Form.Label style={{ float: 'left' }}>
						Penjelasan Fasilitas :
					</Form.Label>
					<Form.Control
						placeholder="ini adalah ..."
						// value={data.penjelasan}
						// onChange={handleChange}
						defaultValue={data.penjelasan}
						required
					/>
					<Form.Control.Feedback type="invalid">
						Penjelasan Fasilitas Kosong!
					</Form.Control.Feedback>
				</Form.Group>

				<Form.Group className="mb-3" controlId="validationPenjelasanGedung">
					<Form.Label style={{ float: 'left' }}>
						ID Gedung Fasilitas :
					</Form.Label>
					<Form.Control
						placeholder="1,2,3,4,..."
						// value={data.idGedung}
						// onChange={handleChange}
						defaultValue={data.idGedung}
						required
					/>
					<Form.Control.Feedback type="invalid">
						ID Gedung Kosong!
					</Form.Control.Feedback>
				</Form.Group>

				<Form.Group className="mb-3" controlId="validationGambarGedung">
					<Form.Label style={{ float: 'left' }}>Gambar Fasilitas:</Form.Label>
					<Form.Control
						type="file"
						defaultValue={data.image}
						// value={data.image}
						// onChange={handleChange}
						required
					/>
					<Form.Control.Feedback type="invalid">
						Gambar Fasilitas Kosong!
					</Form.Control.Feedback>
				</Form.Group>
				<div
					className="addGroup"
					style={{ justifyContent: 'space-evenly', paddingTop: '25px' }}
				>
					<Button
						variant="primary"
						type="submit"
						// onClick={() => {
						// 	modalSuccess();
						// }}
					>
						ADD
					</Button>{' '}
					<Button variant="danger" as={Link} to={`/UPerVR/admin/dashboard`}>
						Cancel
					</Button>{' '}
				</div>
			</Form>
		</div>
	);
};

export default UpdateFasilitasForm;
