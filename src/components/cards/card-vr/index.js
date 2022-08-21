import React from 'react';

const VRTour = (props) => {
	return (
		<iframe
			src={props.link}
			allow="xr-spatial-tracking; gyroscope; accelerometer"
			allowFullScreen="true"
			frameBorder={'0'}
			className="VRCard"
			scrolling="no"
		></iframe>
	);
};

export default VRTour;
