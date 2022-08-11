import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';

const Login = () => {
	const [validated, setValidated] = useState(false);

	const handleSubmit = (event) => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		} else {
			setValidated(true);
			window.location.href = 'http://localhost:3000/UPerVR/admin/dashboard';
		}
	};
	return (
		<div className="login">
			<Card style={{ width: '20rem' }}>
				<Card.Body>
					<img
						src="https://sso.universitaspertamina.ac.id/images/logo.png"
						alt="LogoUPER"
					/>
					<Form
						style={{ paddingBottom: '26px' }}
						onSubmit={handleSubmit}
						validated={validated}
					>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control type="email" placeholder="Enter email" required />
							<Form.Control.Feedback type="invalid">
								Email Address Kosong!
							</Form.Control.Feedback>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								placeholder="Password"
								required
								minLength={8}
							/>
							<Form.Control.Feedback type="invalid">
								Password Kosong!
							</Form.Control.Feedback>
						</Form.Group>

						<Button variant="primary" type="submit" style={{ width: '18rem' }}>
							Login
						</Button>
					</Form>
				</Card.Body>
			</Card>
		</div>
	);
};

export default Login;
