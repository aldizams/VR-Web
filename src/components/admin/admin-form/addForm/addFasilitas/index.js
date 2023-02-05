import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { addFasilitas } from '../../../../../services/api';

const AddFasilitasForm = () => {
	const [namaFasilitas, setNamaFasilitas] = useState('');
	const [penjelasan, setPenjelasan] = useState('');
	const [image, setImage] = useState('');
	const [idGedung, setIdGedung] = useState('');
	const navigate = useNavigate();
	const [validated, setValidated] = useState(false);

	const modalSuccess = () => {
		Swal.fire({
			position: 'center',
			icon: 'success',
			title: 'Add Fasilitas Success',
			showConfirmButton: false,
			timer: 1300,
		});
	};
	const modalError = () => {
		Swal.fire({
			position: 'center',
			icon: 'error',
			title: 'Add Fasilitas Failed',
			showConfirmButton: false,
			timer: 1300,
		});
	};

	const Submit = (namaFasilitas, penjelasan, image, idGedung) => {
		const bodyJSON = {
			idGedung: idGedung,
			namaFasilitas: namaFasilitas,
			penjelasan: penjelasan,
			image: image,
		};
		return addFasilitas(bodyJSON);
	};

	const handleSubmit = async (event) => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		} else {
			setValidated(true);
			event.preventDefault();
			await Submit(namaFasilitas, penjelasan, image, idGedung)
				.then(() => {
					modalSuccess();
					setTimeout(() => navigate('/UPerVR/admin/dashboard'), 1300);
				})
				.catch(() => modalError());
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
				<Form.Group className="mb-3" controlId="validationnamaGedung">
					<Form.Label style={{ float: 'left' }}>Nama Fasilitas :</Form.Label>
					<Form.Control
						placeholder="fasilitas"
						onChange={(e) => setNamaFasilitas(e.target.value)}
						value={namaFasilitas}
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
						value={penjelasan}
						onChange={(e) => setPenjelasan(e.target.value)}
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
						value={idGedung}
						onChange={(e) => setIdGedung(e.target.value)}
						required
					/>
					<Form.Control.Feedback type="invalid">
						ID Gedung Kosong!
					</Form.Control.Feedback>
				</Form.Group>

				<Form.Group className="mb-3" controlId="validationGambarGedung">
					<Form.Label style={{ float: 'left' }}>Gambar Fasilitas:</Form.Label>
					<Form.Control
						type="text"
						value={image}
						onChange={(e) => setImage(e.target.value)}
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
					<Button variant="primary" type="submit">
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

export default AddFasilitasForm;
