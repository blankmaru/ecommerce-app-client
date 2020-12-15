import React, { FC } from 'react';
import { Container, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

const Navbar: FC = () => {
	return (
		<Menu fixed="top" inverted>
			<Container>
				<Menu.Item as="a" header>
					<Link to="/products">Ecommerce-app</Link>
				</Menu.Item>
				<Menu.Item as="a">
					<Link to="/products">Products</Link>
				</Menu.Item>
				<Menu.Item as="a">
					<Link to="/admin">Admin</Link>
				</Menu.Item>
				<Menu.Item as="a">
					<Link to="/profile">Profile</Link>
				</Menu.Item>
				<Menu.Item position='right' as="a">
					<Link to="/login">Login</Link>
				</Menu.Item>
			</Container>
		</Menu>
	);
};

export default Navbar;