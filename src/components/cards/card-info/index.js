import React from 'react';
import { Card } from 'react-bootstrap';
import bg from '../../../assets/img/gedung/IMG_4296.JPG';

const InfoCard = () => {
	return (
		<Card
			style={{
				display: 'flex',
				justifyContent: 'center',
				flexDirection: 'row',
				backgroundColor: '#C1D340',
			}}
		>
			<img src={bg} style={{ width: '18rem' }}></img>
			<Card.Body>This is some text within a card body.</Card.Body>
		</Card>
	);
};

export default InfoCard;
