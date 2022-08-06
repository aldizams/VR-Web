import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import Swal from 'sweetalert2';

const AddFasilitasForm = () => {
	const modalSuccess = () => {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Something went wrong!',
			footer: '<a href="">Why do I have this issue?</a>',
		});
	};
	const [validated, setValidated] = useState(false);

	const [formValue, setformValue] = React.useState({
		idGedung: '',
		namaFasilitas: '',
		penjelasan: '',
		image: '',
	});
	const handleSubmit = async (event) => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		// store the states in the form data
		const FormData = new FormData();
		FormData.append('idGedung', formValue.idGedung);
		FormData.append('namaFasilitas', formValue.namaFasilitas);
		FormData.append('penjelasan', formValue.penjelasan);
		FormData.append('image', formValue.image);

		try {
			// make axios post request
			const response = await axios({
				method: 'post',
				url: 'http://localhost:8000/fasilitas',
				data: FormData,
				headers: { 'Content-Type': 'multipart/form-data' },
			});
		} catch (error) {
			console.log(error);
		}
		setValidated(true);
	};

	const handleChange = (event) => {
		setformValue({
			...formValue,
			[event.target.name]: event.target.value,
		});
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
						aria-label="fasilitas"
						aria-describedby="basic-addon2"
						onChange={handleChange}
						// value={formValue.namaFasilitas}
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
						aria-label="fasilitas"
						aria-describedby="basic-addon2"
						// value={formValue.penjelasan}
						onChange={handleChange}
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
						placeholder="1"
						aria-label="fasilitas"
						aria-describedby="basic-addon2"
						// value={formValue.idGedung}
						onChange={handleChange}
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
						// value={formValue.image}
						onChange={handleChange}
						required
					/>{' '}
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
						onClick={() => {
							modalSuccess();
						}}
					>
						ADD
					</Button>{' '}
					<Button variant="danger">Cancel</Button>{' '}
				</div>
			</Form>

			{/* 
			<div id="dynamicCheck">
				<input
					type="button"
					value="Create Element"
					onClick={createNewElement()}
				/>
			</div>

			<div id="newElementId">New inputbox goes here:</div> */}
		</div>
	);
};

export default AddFasilitasForm;
