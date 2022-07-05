import React from 'react';
import { Card } from 'react-bootstrap';

const FasilitasCard = (props) => {
	if (props.id % 2 === 0) {
		return (
			<Card>
				<Card.Body>Ganjil</Card.Body>
			</Card>
		);
	} else {
		return (
			<Card>
				<Card.Body>Genap</Card.Body>
			</Card>
		);
	}
};

export default FasilitasCard;
