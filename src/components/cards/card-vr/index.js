import React from 'react';

const VRTour = () => {
	return (
		<iframe
			src="https://kuula.co/share/collection/7vGps?logo=1&info=1&fs=1&vr=0&autorotate=0.5&thumbs=3&margin=8&alpha=0.60&inst=0"
			allow="xr-spatial-tracking; gyroscope; accelerometer"
			width={'100%'}
			height={'680'}
			allowFullScreen="true"
			frameBorder={'0'}
			style={{ margin: '0px 0px 30px 0px', borderRadius: '20px' }}
		></iframe>
	);
};

export default VRTour;
