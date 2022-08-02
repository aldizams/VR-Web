import React from 'react';
import { Card } from 'react-bootstrap';

const InfoCard = (props) => {
	return (
		<Card className="cardInfo">
			<img
				src={props.img}
				style={{
					maxWidth: '50%',
					width: '100rem',
					borderRadius: '20px',
					border: '3px solid white',
				}}
			/>

			<Card.Body>
				<b style={{ color: 'white' }}>{props.nama}</b>
				<br />
				<p>{props.exp}</p>
			</Card.Body>
		</Card>
	);
};

export default InfoCard;
