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
				alignItems: 'center',
				width: '100%',
			}}
		>
			<img src={logo} width="135rem" style={{ margin: '0px 40px' }}></img>
			<p
				style={{
					width: '19rem',
					color: 'white',
					textAlign: 'left',
					margin: '40px 0 40px 40px',
				}}
			>
				Alamat Universitas Pertamina :<br></br>
				Jl. Teuku Nyak Arief, RT.7/RW.8, Simprug, Kec. Kby. Lama, Kota Jakarta
				Selatan, Daerah Khusus Ibukota Jakarta 12220
			</p>
		</div>
	);
};

export default Footer;
