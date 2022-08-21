import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
const Dashboard = () => {
	const [refresh, setRefresh] = useState(false);
	const [data, setData] = useState([]);

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
				axios.delete(`http://localhost:8000/gedung/${item}`).then(() => {
					setRefresh(!refresh);
					Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
				});
			}
		});
	};

	const fetchApi = async () => {
		axios
			.get('http://localhost:8000/gedung')
			.then((response) => setData(response.data));
	};

	useEffect(() => {
		fetchApi();
	}, [refresh]);

	return (
		<div>
			<div className="addGroup">
				<div style={{ padding: '20px' }}>
					<b style={{ padding: '12px' }}>Tambah Gedung : </b>
					<Button
						variant="primary"
						as={Link}
						to="/UPerVR/admin/dashboard/add-gedung"
					>
						ADD
					</Button>{' '}
				</div>
				<div>
					<b style={{ padding: '20px' }}>Tambah Fasilitas : </b>
					<Button
						variant="primary"
						as={Link}
						to="/UPerVR/admin/dashboard/add-fasilitas"
					>
						ADD
					</Button>{' '}
				</div>
			</div>
			<div>
				<div>
					<h2>Tabel Gedung</h2>
				</div>
				<Table striped bordered hover responsive>
					<thead>
						<tr>
							<th>id</th>
							<th>Nama Gedung</th>
							<th>Gambar</th>
							<th>Link VR</th>
							<th>Penjelasan</th>

							<th>Update</th>
							<th>Delete</th>
						</tr>
					</thead>
					<tbody>
						{data.map((item) => (
							<tr>
								<td>{item.id}</td>
								<td>{item.namaGedung}</td>
								<td style={{ maxWidth: '40rem' }}>
									<img src={item.image} style={{ maxWidth: '15rem' }} />
								</td>
								<td
									style={{
										whiteSpace: 'wrap',
										overflow: 'hidden',
										textOverflow: 'ellips',
										display: 'table-cell',
										maxWidth: '20rem',
									}}
								>
									{item.linkTour}
								</td>
								<td>{item.penjelasan}</td>

								<td>
									{' '}
									<Button
										variant="warning"
										as={Link}
										to={`/UPerVR/admin/dashboard/update-gedung/${item.id}`}
										id={item.id}
									>
										Update
									</Button>{' '}
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
		</div>
	);
};

export default Dashboard;
