import Axios, { AxiosResponse } from 'axios';
import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import { apiURL } from '../../config';

const Register: FC = () => {
	const [username, setUsername] = useState<string>('')
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')

	const register = () => {
		Axios.post(`${apiURL}/api/users/register`, {
			username,
			email,
			password
		}, {
			withCredentials: true
		}).then((res: AxiosResponse) => {
			if (res.data.success === true) {
				window.location.href = '/login'
			}
		})
	}

	return (
		<Grid textAlign="center" verticalAlign="middle">
			<Grid.Column style={{ maxWidth: 450 }}>
				<Header as="h2" style={{ color: '#d65f1a' }} textAlign="center">
					Registration
				</Header>
				<Form size="large">
					<Segment stacked>
						<Form.Input 
							fluid 
							icon="user" 
							iconPosition="left" 
							placeholder="Username" 
							type="Username"
							value={username}
							onChange={(e) => setUsername(e.target.value)} 
						/>
						<Form.Input 
							fluid 
							icon="mail" 
							iconPosition="left" 
							placeholder="E-mail address" 
							value={email}
							onChange={(e) => setEmail(e.target.value)} 
						/>
						<Form.Input 
							fluid 
							icon="lock" 
							iconPosition="left" 
							placeholder="Password" 
							type="password" 
							value={password}
							onChange={(e) => setPassword(e.target.value)} 
						/>

						<Button onClick={register} style={{ color: '#d65f1a', backgroundColor: 'black' }} fluid size="large">
							Register
						</Button>
					</Segment>
				</Form>
				<Message>
					Already have account? <Link to="/login">Log In</Link>
				</Message>
			</Grid.Column>
		</Grid>
	);
};

export default Register;
