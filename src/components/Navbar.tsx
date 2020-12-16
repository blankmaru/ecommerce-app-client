import React, { FC, useContext } from 'react';
import { Container, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { myContext } from '../context';
import { FiLogOut } from 'react-icons/fi'
import { logOut } from '../config';


const Navbar: FC = () => {
	const ctx = useContext(myContext);

	return (
		<Menu fixed="top" inverted>
			<Container>
				<Menu.Item header>
					<Link to="/">Ecommerce-app</Link>
				</Menu.Item>
				<Menu.Item>
					<Link to="/">Products</Link>
				</Menu.Item>
				{ctx ? (
					<>
						<Menu.Item>
							<Link to="/admin">Admin</Link>
						</Menu.Item>
						<Menu.Item>
							<Link to="/profile">Profile</Link>
						</Menu.Item>
						<Menu.Item onClick={logOut} position="right">
							<Link to="/logout"><FiLogOut /></Link>
						</Menu.Item>
					</>
				) : (
					<Menu.Menu position="right">
						<Menu.Item>
							<Link to="/login">Login</Link>
						</Menu.Item>
						<Menu.Item>
							<Link to="/register">Register</Link>
						</Menu.Item>
					</Menu.Menu>
				)}
			</Container>
		</Menu>
	);
};

export default Navbar;
