import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
	const [validated, setValidated] = useState(false);

	const handleSubmit = (event) => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		setValidated(true);
	};
	return (
		<div className="login">
			<Card style={{ width: '20rem' }}>
				<Card.Body>
					<img src="https://sso.universitaspertamina.ac.id/images/logo.png" />
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
							<Form.Control type="password" placeholder="Password" required />
							<Form.Control.Feedback type="invalid">
								Password Kosong!
							</Form.Control.Feedback>
						</Form.Group>

						<Button
							variant="primary"
							type="submit"
							style={{ width: '18rem' }}
							as={Link}
							to={`/UPerVR/admin/dashboard`}
						>
							Login
						</Button>
					</Form>
				</Card.Body>
			</Card>
		</div>
	);
};

export default Login;
