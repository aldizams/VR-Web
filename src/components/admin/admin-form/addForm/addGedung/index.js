import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const AddGedungForm = () => {
	const [validated, setValidated] = useState(false);

	const handleSubmit = (event) => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		setValidated(true);
	};

	return (
		<div style={{ padding: '150px 0' }}>
			<div style={{ paddingBottom: '60px' }}>
				<h3 style={{ float: 'left', textDecoration: 'underline' }}>
					TAMBAH GEDUNG
				</h3>
			</div>
			<Form noValidate validated={validated} onSubmit={handleSubmit}>
				<Form.Group className="mb-3" controlId="validationNamaGedung">
					<Form.Label style={{ float: 'left' }}>Nama Gedung :</Form.Label>
					<Form.Control
						placeholder="tempat"
						aria-label="tempat"
						aria-describedby="basic-addon2"
						required
					/>
					<Form.Control.Feedback type="invalid">
						Nama Gedung Kosong!
					</Form.Control.Feedback>
				</Form.Group>

				<Form.Group className="mb-3" controlId="validationPenjelasanGedung">
					<Form.Label style={{ float: 'left' }}>Penjelasan Gedung :</Form.Label>
					<Form.Control
						placeholder="tempat ini digunakan untuk ..."
						aria-label="tempat"
						aria-describedby="basic-addon2"
						required
					/>
					<Form.Control.Feedback type="invalid">
						Penjelasan Gedung Kosong!
					</Form.Control.Feedback>
				</Form.Group>

				<Form.Group className="mb-3" controlId="validationPenjelasanGedung">
					<Form.Label style={{ float: 'left' }}>Lik VR Gedung :</Form.Label>
					<Form.Control
						placeholder="kuula.com"
						aria-label="tempat"
						aria-describedby="basic-addon2"
						required
					/>
					<Form.Control.Feedback type="invalid">
						Link VR Gedung Kosong!
					</Form.Control.Feedback>
				</Form.Group>

				<Form.Group className="mb-3" controlId="validationGambarGedung">
					<Form.Label style={{ float: 'left' }}>Gambar Gedung :</Form.Label>
					<Form.Control type="file" required />{' '}
					<Form.Control.Feedback type="invalid">
						Gambar Gedung Kosong!
					</Form.Control.Feedback>
				</Form.Group>
				<div
					className="addGroup"
					style={{ justifyContent: 'space-evenly', paddingTop: '25px' }}
				>
					<Button variant="primary" type="submit">
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

export default AddGedungForm;
