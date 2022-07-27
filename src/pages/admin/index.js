import React from 'react';
import { Container } from 'react-bootstrap';
import { Dashboard } from '../../components';

const AdminPage = () => {
	return (
		<Container
			fluid="sm"
			style={{
				height: '550px',
			}}
		>
			<Dashboard />
		</Container>
	);
};

export default AdminPage;
