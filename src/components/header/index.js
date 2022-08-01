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
			style={{ backgroundColor: '#135CB2', height: '6em' }}
		>
			{/* Masi nyari cara biar tulisannya ditengah dan berjarak pakai display flex*/}
			<img
				src={logo}
				alt="logo"
				style={{ position: 'relative', width: '21em', height: '6em' }}
			/>
			<Container fluid>
				<Navbar id="navbar-nav" style={{ position: 'relative' }}>
					<Nav className="me-auto">
						<Nav.Link as={Link} to="/">
							<p className="navLink">Home</p>
						</Nav.Link>

						<NavDropdown
							title="Area"
							id="collasible-nav-dropdown"
							className="navLink"
						>
							{/* nanti disini bakal map area nama area dari axios*/}
							{area.map((item) => (
								<NavDropdown.Item
									key={item.id}
									as={Link}
									to={`/Area/${item.namaGedung}/${item.id}`}
									name={item.namaGedung}
									params={item}
								>
									<p>{item.namaGedung}</p>
								</NavDropdown.Item>
							))}
						</NavDropdown>

						<Nav.Link
							href="https://universitaspertamina.ac.id/"
							target="_blank"
						>
							<p className="navLink">UPER</p>
						</Nav.Link>
						<Nav.Link
							href="https://pmb.universitaspertamina.ac.id/"
							target="_blank"
						>
							<p className="navLink">Daftar Sekarang!</p>
						</Nav.Link>
					</Nav>
				</Navbar>
			</Container>
		</Navbar>
	);
};

export default Header;
