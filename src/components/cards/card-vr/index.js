import React from 'react';
import { Carousel } from 'react-bootstrap';

const VRTour = (props) => {
	return (
		<div>
			<Carousel fade className="carousel-main">
				<Carousel.Item className="carousel-vr">
					<iframe
						src={props.link}
						allow="xr-spatial-tracking; gyroscope; accelerometer"
						allowFullScreen="true"
						frameBorder={'0'}
						className="VRCard"
						scrolling="no"
					></iframe>
				</Carousel.Item>
				<Carousel.Item className="carousel-vr">
					<iframe
						src={props.link}
						allow="xr-spatial-tracking; gyroscope; accelerometer"
						allowFullScreen="true"
						frameBorder={'0'}
						className="VRCard"
						scrolling="no"
					></iframe>
				</Carousel.Item>
				<Carousel.Item className="carousel-vr">
					<iframe
						src={props.link}
						allow="xr-spatial-tracking; gyroscope; accelerometer"
						allowFullScreen="true"
						frameBorder={'0'}
						className="VRCard"
						scrolling="no"
					></iframe>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

export default VRTour;
