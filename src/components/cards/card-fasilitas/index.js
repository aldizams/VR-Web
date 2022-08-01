import React from 'react';
import { Card } from 'react-bootstrap';
import InfoCard from '../card-info';

const FasilitasCard = (props) => {
	if (props.index % 2 === 0) {
		return <Card>Car</Card>;
	} else {
		return (
			<Card>
				<Card.Body>Genap</Card.Body>
			</Card>
		);
	}
};

export default FasilitasCard;
