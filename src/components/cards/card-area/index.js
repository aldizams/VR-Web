import React from 'react';
import { Card, Button } from 'react-bootstrap';
import btnBg from '../../../assets/img/bg-upce.png';

const AreaCard = (props) => {
	return (
		<Card
			style={{
				width: '39rem',
				height: '19rem',
				border: '5px',
				margin: '25px 0 25px 0',
			}}
		>
			<Card.Body
				style={{
					backgroundImage: `url("${props.bg}")`,
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					borderRadius: '20px',
					border: '3px solid #084999',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'flex-end',
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
					{props.name}
				</Button>
			</Card.Body>
		</Card>
	);
};

export default AreaCard;
