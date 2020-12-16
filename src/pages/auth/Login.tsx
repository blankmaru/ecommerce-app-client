import Axios, { AxiosResponse } from 'axios';
import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import { apiURL } from '../../config';

const Login: FC = () => {
	const [username, setUsername] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const login = () => {
		Axios.post(`${apiURL}/api/users/login`, {
			username,
			password
		}, {
			headers: {
                'content-type': 'application/json'
            },
            withCredentials: true
		}).then((res: AxiosResponse) => {
			window.location.href = '/'
		})
	};

	return (
		<Grid textAlign="center" verticalAlign="middle">
			<Grid.Column style={{ maxWidth: 450 }}>
				<Header as="h2" style={{ color: '#d65f1a' }} textAlign="center">
					Log In
				</Header>
				<Form size="large">
					<Segment stacked>
						<Form.Input
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							fluid
							icon="user"
							iconPosition="left"
							placeholder="Username"
							type="Username"
						/>
						<Form.Input
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							fluid
							icon="lock"
							iconPosition="left"
							placeholder="Password"
							type="password"
						/>

						<Button
							onClick={login}
							style={{ color: '#d65f1a', backgroundColor: 'black' }}
							fluid
							size="large"
						>
							Login
						</Button>
					</Segment>
				</Form>
				<Message>
					New to us? <Link to="/register">Register</Link>
				</Message>
			</Grid.Column>
		</Grid>
	);
};

export default Login;
