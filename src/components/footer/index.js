import React from 'react';
import bg from '../../assets/img/footer.jpg';
import logo from '../../assets/img/logo-white.png';

const Footer = () => {
	return (
		<div
			style={{
				backgroundImage: `url(${bg})`,
				height: '8rem',
				display: 'flex',
				justifyContent: 'center',
			}}
		>
			<img src={logo}></img>
			<p style={{ width: '14rem' }}>
				Alamat Universitas Pertamina :<br></br>
				Jl. Teuku Nyak Arief, RT.7/RW.8, Simprug, Kec. Kby. Lama, Kota Jakarta
				Selatan, Daerah Khusus Ibukota Jakarta 12220
			</p>
		</div>
	);
};

export default Footer;
