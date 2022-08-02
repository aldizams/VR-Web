import React from 'react';
import { Card } from 'react-bootstrap';

const InfoOddCard = (props) => {
	return (
		<Card className="oddInfoCard">
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

export default InfoOddCard;
