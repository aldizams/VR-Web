import React from 'react';
import { Card } from 'react-bootstrap';

const InfoCard = () => {
	return (
		<Card
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'row',
				backgroundColor: '#C1D340',
				border: 'none',
				borderRadius: '20px',
				boxShadow: '8px 8px 16px -2px rgba(0,0,0,0.34)',
				width: '700rem',
			}}
			className="cardInfo"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="white"
				class="bi bi-info"
				viewBox="0 0 16 16"
				style={{
					height: '10rem',
					border: '3px solid white',
					borderRadius: '20px',
				}}
			>
				<path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
			</svg>

			<Card.Body>
				<b style={{ color: 'white' }}>This is some text within a card body.</b>
			</Card.Body>
		</Card>
	);
};

export default InfoCard;
