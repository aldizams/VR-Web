import React from 'react';
import { Button, Form } from 'react-bootstrap';
const AddGedungForm = () => {
	return (
		<div style={{ padding: '150px 0' }}>
			<Form.Group className="mb-3">
				<Form.Label style={{ float: 'left' }}>Nama Gedung :</Form.Label>
				<Form.Control
					placeholder="tempat"
					aria-label="tempat"
					aria-describedby="basic-addon2"
				/>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label style={{ float: 'left' }}>Penjelasan Gedung :</Form.Label>
				<Form.Control
					placeholder="tempat ini digunakan untuk ..."
					aria-label="tempat"
					aria-describedby="basic-addon2"
				/>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label style={{ float: 'left' }}>Gambar Gedung :</Form.Label>
				<Form.Control type="file" />{' '}
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label style={{ float: 'left' }}>Fasilitas :</Form.Label>
				<Form.Control placeholder="Fasilitas.." />
				<Button variant="secondary">+</Button>{' '}
				<Button variant="secondary">-</Button>{' '}
			</Form.Group>

			{/* 
			<div id="dynamicCheck">
				<input
					type="button"
					value="Create Element"
					onClick={createNewElement()}
				/>
			</div>

			<div id="newElementId">New inputbox goes here:</div> */}
			<div
				className="addGroup"
				style={{ justifyContent: 'space-evenly', paddingTop: '25px' }}
			>
				<Button variant="primary">ADD</Button>{' '}
				<Button variant="danger">Cancel</Button>{' '}
			</div>
		</div>
	);
};

export default AddGedungForm;
