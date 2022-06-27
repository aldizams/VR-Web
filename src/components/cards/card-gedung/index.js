import React from 'react';
import { Card } from 'react-bootstrap';

const GedungCard = (props) => {
	return (
		<Card>
			<Card.Body>
				<h1>{props.name}</h1>
			</Card.Body>
		</Card>
	);
};

export default GedungCard;
