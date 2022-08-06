import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import Swal from 'sweetalert2';

const DashboardFasilitas = () => {
	const deleteData = (item) => {
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!',
		}).then((result) => {
			if (result.isConfirmed) {
				axios.delete(`http://localhost:8000/fasilitas/${item}`).then(() => {
					Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
				});
			}
		});
	};
	const [data, setData] = useState([]);

	const fetchApi = async () => {
		axios
			.get('http://localhost:8000/fasilitas')
			.then((response) => setData(response.data));
	};
	useEffect(() => {
		fetchApi();
	}, [data]);

	return (
		<div>
			<div>
				<h2>Tabel Fasilitas</h2>
			</div>
			<Table striped bordered hover responsive>
				<thead>
					<tr>
						<th>id</th>
						<th>Gammbar</th>
						<th>id Gedung</th>
						<th>Nama Fasilitas</th>
						<th>Penjelasan</th>
						<th>Update</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{data.map((item) => (
						<tr>
							<td>{item.id}</td>
							<td>
								<img src={item.image} />
							</td>
							<td>{item.idGedung}</td>
							<td>{item.namaFasilitas}</td>

							<td>{item.penjelasan}</td>

							<td>
								{' '}
								<Button variant="warning">Update</Button>{' '}
							</td>
							<td>
								{' '}
								<Button
									variant="danger"
									onClick={() => {
										deleteData(item.id);
									}}
								>
									Delete
								</Button>{' '}
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
};

export default DashboardFasilitas;
