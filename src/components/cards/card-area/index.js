import React from 'react';
import { Card, Button } from 'react-bootstrap';
import bg from '../../../assets/img/gedung/IMG_4296.JPG';

const AreaCard = (image) => {
	return (
		<Card style={{ width: '20rem', border: '5px' }}>
			<Card.Body
				style={{
					backgroundImage: `url(${bg})`,
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center',
					backgroundSize: 'cover',
				}}
			>
				<Button>Ke Gedung Anu</Button>
			</Card.Body>
		</Card>
	);
};

export default AreaCard;
