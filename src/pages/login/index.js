import axios from 'axios';
import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const Login = (name, password) => {
		const bodyJSON = {
			name: name,
			password: password,
		};
		return axios.post('http://localhost:8000/auth/login', bodyJSON);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		await Login(name, password)
			.then((response) => {
				Cookies.set('token', response.data.access_token);
				navigate('/UPerVR/admin/dashboard');
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className="login">
			<Card style={{ width: '20rem' }}>
				<Card.Body>
					<img
						src="https://sso.universitaspertamina.ac.id/images/logo.png"
						alt="LogoUPER"
					/>
					<Form style={{ paddingBottom: '26px' }} onSubmit={handleSubmit}>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control
								type="email"
								placeholder="Enter email"
								required
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
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
								value={password}
								onChange={(e) => setPassword(e.target.value)}
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
