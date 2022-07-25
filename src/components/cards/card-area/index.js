import React from 'react';
import { Card, Button } from 'react-bootstrap';
import btnBg from '../../../assets/img/bg-upce.png';
import { Link } from 'react-router-dom';

const AreaCard = (props) => {
	return (
		<Card
			style={{
				width: '39rem',
				height: '19rem',
				border: '5px',
				margin: '25px 0 25px 0',
				borderRadius: '20px',
			}}
		>
			<Card.Body
				style={{
					backgroundImage: `url("${props.bg}")`,
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					border: '3px solid #084999',
					borderRadius: '20px',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'flex-end',
					boxShadow: '8px 8px 16px -2px rgba(0,0,0,0.34)',
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
					as={Link}
					to={`/Area/${props.name}/${props.id}`}
					key={props.id}
					params={props}
				>
					{props.name}
				</Button>
			</Card.Body>
		</Card>
	);
};

export default AreaCard;
