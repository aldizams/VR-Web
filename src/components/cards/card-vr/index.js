import React from 'react';
import { Carousel } from 'react-bootstrap';

const VRTour = (props) => {
	return (
		<div>
			{/* <div id="carouselExampleFade" class="carousel slide carousel-fade">
				<div class="carousel-inner">
					<div class="carousel-item active">
						<iframe
							src={props.link}
							allow="xr-spatial-tracking; gyroscope; accelerometer"
							allowFullScreen="true"
							frameBorder={'0'}
							className="VRCard"
							scrolling="no"
						></iframe>
					</div>
					<div class="carousel-item">
						<iframe
							src={props.link}
							allow="xr-spatial-tracking; gyroscope; accelerometer"
							allowFullScreen="true"
							frameBorder={'0'}
							className="VRCard"
							scrolling="no"
						></iframe>
					</div>
					<div class="carousel-item">
						<iframe
							src={props.link}
							allow="xr-spatial-tracking; gyroscope; accelerometer"
							allowFullScreen="true"
							frameBorder={'0'}
							className="VRCard"
							scrolling="no"
						></iframe>
					</div>
				</div>
				<button
					class="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleFade"
					data-bs-slide="prev"
				>
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Previous</span>
				</button>
				<button
					class="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleFade"
					data-bs-slide="next"
				>
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Next</span>
				</button>
			</div> */}
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
