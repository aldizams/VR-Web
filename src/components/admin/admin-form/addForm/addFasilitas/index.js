import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';

const AddFasilitasForm = () => {
	return (
		<>
			<InputGroup className="mb-3">
				<InputGroup.Text id="basic-addon1">Nama Fasilitas</InputGroup.Text>
				<Form.Control
					placeholder="tempat"
					aria-label="tempat"
					aria-describedby="basic-addon1"
				/>
			</InputGroup>

			<InputGroup className="mb-3">
				<InputGroup.Text id="basic-addon2">
					Penjelasan Fasilitas
				</InputGroup.Text>
				<Form.Control
					placeholder="tempat ini digunakan untuk ..."
					aria-label="tempat"
					aria-describedby="basic-addon2"
				/>
			</InputGroup>

			<InputGroup className="mb-3">
				<InputGroup.Text id="basic-addon3">Gambar Fasilitas</InputGroup.Text>
				<Form.Control type="file" />{' '}
			</InputGroup>
		</>
	);
};

export default AddFasilitasForm;
