import React from 'react';
import { Link } from 'react-router-dom';

const VRTour = (props) => {
	return (
		<iframe
			src={props.link}
			allow="xr-spatial-tracking; gyroscope; accelerometer"
			allowFullScreen="true"
			frameBorder={'0'}
			className="VRCard"
		></iframe>
	);
};

export default VRTour;
