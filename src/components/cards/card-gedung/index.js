import React from 'react';
import { Card } from 'react-bootstrap';
import bg from '../../../assets/img/bg-upce.png';

const GedungCard = (props) => {
	return (
		<Card
			style={{
				backgroundColor: '#C1D340',
				borderRadius: '20px',
				width: '85rem',
				margin: '40px 0px',
			}}
		>
			<Card.Body style={{ display: 'flex' }}>
				<div>
					<h1 style={{ color: 'white' }}>{props.name}</h1>
					<div style={{ backgroundImage: `${bg}` }}>
						<h1>{props.exp}</h1>
					</div>
				</div>
				<div>
					<img
						src={props.img}
						width="100%"
						style={{
							border: '3px solid white',
							borderRadius: '20px',
							boxShadow: '10px 10px 15px -4px rgba(0,0,0,0.67)',
						}}
					/>
				</div>
			</Card.Body>
		</Card>
	);
};

export default GedungCard;
