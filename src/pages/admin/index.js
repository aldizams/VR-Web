import React from 'react';
import { Container } from 'react-bootstrap';
import { Dashboard, DashboardFasilitas } from '../../components';

const AdminPage = () => {
	return (
		<>
			<Dashboard />
			<DashboardFasilitas />
		</>
	);
};

export default AdminPage;
