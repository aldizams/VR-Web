import React from 'react';
import { Card } from 'react-bootstrap';
import bg from '../../../assets/img/bg-upce.png';

const ExplainCard = () => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexWrap: 'wrap',
				margin: '40px',
			}}
		>
			<h1 style={{ marginRight: '90px', textAlign: 'left', color: '#084999' }}>
				VIRTUAL <br></br> TOUR
			</h1>
			<Card style={{ width: '50rem', border: 'none' }}>
				{/*Perlu benerin border radius, sama tulisan virtual tournya, dibikin komponen2 aja yaaa */}
				<Card.Body
					style={{
						backgroundImage: `url(${bg})`,
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						borderRadius: '20px',
						color: 'white',
						textAlign: 'left',
					}}
				>
					<p>
						Virtual Tour merupakan Virtual Tour merupakan Virtual Tour merupakan
						Virtual Tour merupakan Virtual Tour merupakan Virtual Tour merupakan
						Virtual Tour merupakan Virtual Tour merupakan Virtual Tour merupakan
						Virtual Tour merupakan Virtual Tour merupakan
					</p>
				</Card.Body>
			</Card>
		</div>
	);
};

export default ExplainCard;
