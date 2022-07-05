import React, { useState, useEffect } from 'react';
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import logo from '../../assets/img/logo-decorated.png';
import axios from 'axios';
import { Link } from 'react-router-dom';

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

	return (
		<Navbar
			collapseOnSelect
			expand="lg"
			variant="dark"
			style={{ backgroundColor: '#135CB2', height: '5em' }}
		>
			{/* Masi nyari cara biar tulisannya ditengah dan berjarak pakai display flex*/}
			<img
				src={logo}
				alt="logo"
				style={{ position: 'absolute', width: '15%', height: '5em' }}
			/>
			<Container fluid style={{ position: 'absolute', left: '15rem' }}>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link as={Link} to="/">
							Home
						</Nav.Link>
						<NavDropdown title="Area" id="collasible-nav-dropdown">
							{/* nanti disini bakal map area nama area dari axios*/}
							{area.map((item) => (
								<NavDropdown.Item
									key={item.id}
									as={Link}
									to={`/Area/${item.namaGedung}/${item.id}`}
									name={item.namaGedung}
									params={item}
								>
									{item.namaGedung}
								</NavDropdown.Item>
							))}
						</NavDropdown>
						<Nav.Link href="https://universitaspertamina.ac.id/">UPER</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
