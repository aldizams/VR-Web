import React from 'react';
import { Card, Button } from 'react-bootstrap';
import bg from '../../../assets/img/gedung/IMG_4296.JPG';
import btnBg from '../../../assets/img/bg-upce.png';

const AreaCard = (image) => {
	return (
		<Card style={{ width: '30rem', height: '12rem', border: '5px' }}>
			<Card.Body
				style={{
					backgroundImage: `url(${bg})`,
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					borderRadius: '20px',
					border: '3px solid #084999',
				}}
			>
				<Button
					style={{
						width: '27rem',
						height: '3rem',
						backgroundImage: `url(${btnBg})`,
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						border: 'none',
						borderRadius: '20px',
					}}
				>
					Gedung Rektorat
				</Button>
			</Card.Body>
		</Card>
	);
};

export default AreaCard;
