import React from 'react';

const VRTour = () => {
	return (
		<iframe
			src="https://kuula.co/share/collection/7vGps?logo=1&info=1&fs=1&vr=0&autorotate=0.5&thumbs=3&margin=8&alpha=0.60&inst=0"
			allow="xr-spatial-tracking; gyroscope; accelerometer"
			allowFullScreen="true"
			frameBorder={'0'}
			className="VRCard"
		></iframe>
	);
};

export default VRTour;
