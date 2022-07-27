import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<div className="login">
			<Card style={{ width: '20rem' }}>
				<Card.Body>
					<img src="https://sso.universitaspertamina.ac.id/images/logo.png" />
					<Form style={{ paddingBottom: '26px' }}>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control type="email" placeholder="Enter email" />
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" placeholder="Password" />
						</Form.Group>

						<Button
							variant="primary"
							type="submit"
							style={{ width: '18rem' }}
							as={Link}
							to=""
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
