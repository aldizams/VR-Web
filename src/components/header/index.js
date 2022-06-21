import React from 'react';
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';

const Header = () => {
	return (
		<>
			<Navbar
				collapseOnSelect
				expand="lg"
				variant="dark"
				style={{ backgroundColor: '#135CB2' }}
			>
				{/* Masi nyari cara biar tulisannya ditengah dan berjarak pakai display flex*/}

				<img src="../../assets/img/logo-decorated.png" alt="logo" />
				<Container>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="#Home">Home</Nav.Link>
							<Nav.Link href="#VirtualTour">Virtual Tour</Nav.Link>
							<NavDropdown title="Area" id="collasible-nav-dropdown">
								{/* nanti disini bakal map area nama area dari axios*/}
								<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">
									Another action
								</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">
									Something
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action/3.4">
									Separated link
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default Header;
