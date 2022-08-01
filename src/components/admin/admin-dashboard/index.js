import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';

const Dashboard = () => {
	const [data, setData] = useState([]);

	const fetchApi = async () => {
		axios
			.get('http://localhost:8000/gedung')
			.then((response) => setData(response.data));
	};
	useEffect(() => {
		fetchApi();
	}, []);

	return (
		<div>
			<Table striped bordered hover>
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
							<td>
								<img src={item.image} />
							</td>
							<td>{item.linkTour}</td>
							<td>{item.penjelasan}</td>
							<td>
								{' '}
								<Button variant="warning">Update</Button>{' '}
							</td>
							<td>
								{' '}
								<Button variant="danger">Delete</Button>{' '}
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
};

export default Dashboard;
