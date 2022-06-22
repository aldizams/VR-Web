import React, { useState, useEffect } from 'react';
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import logo from '../../assets/img/logo-decorated.png';
import axios from 'axios';

const Header = () => {
	const [area, setArea] = useState([]);

	const fetchApi = async () => {
		axios
			.get('http://localhost:8000/gedung')
			.then((response) => setArea(response.data));
	};
	useEffect(() => {
		fetchApi();
	}, []);

	console.log(area);
	return (
		<Navbar
			collapseOnSelect
			expand="lg"
			variant="dark"
			style={{ backgroundColor: '#135CB2' }}
		>
			{/* Masi nyari cara biar tulisannya ditengah dan berjarak pakai display flex*/}
			<Container fluid>
				<img src={logo} alt="logo" style={{ width: '20%' }} />
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#Home">Home</Nav.Link>
						<Nav.Link href="#VirtualTour">Virtual Tour</Nav.Link>
						<NavDropdown title="Area" id="collasible-nav-dropdown">
							{/* nanti disini bakal map area nama area dari axios*/}
							{area.map((item) => (
								<NavDropdown.Item key={item.id}>
									{item.namaGedung}
								</NavDropdown.Item>
							))}
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
