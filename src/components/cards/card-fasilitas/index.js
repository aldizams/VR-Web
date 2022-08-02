import React from 'react';
import { Card } from 'react-bootstrap';
import InfoCard from '../card-info';
import InfoOddCard from '../card-odd-info';

const FasilitasCard = (props) => {
	if (props.index % 3 === 0) {
		return <InfoCard />;
	} else {
		return (
			<InfoOddCard
				nama={props.nama}
				exp={props.exp}
				img={props.img}
				id={props.id}
			/>
		);
	}
};

export default FasilitasCard;
