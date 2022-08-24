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
				margin: '40px',
			}}
		>
			<h1 style={{ marginRight: '90px', textAlign: 'left', color: 'white' }}>
				VIRTUAL <br></br> TOUR
			</h1>
			<Card
				style={{
					width: '55rem',
					border: '3px solid #E4372A',
					backgroundImage: `url(${bg})`,
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					borderRadius: '20px',
				}}
			>
				<Card.Body
					style={{
						color: 'white',
						textAlign: 'left',
					}}
				>
					<p>
						Virtual Tour merupakan perjalanan atau tamasya di lingkungan maya.
						Pada Virtual Campus Tour UPER ini berada di Kampus Universitas
						Pertamina yang berada di Jl. Teuku Nyak Arief, Simprug, Jakarta
						Selatan secara virtual. Saatnya berkeliling kampus Universitas
						Pertamina dengan mengikuti petunjuk atau tutorial yang sudah
						tersedia. Selamat menjelajahi Kampus Universitas Pertamina!
					</p>
				</Card.Body>
			</Card>
		</div>
	);
};

export default ExplainCard;
