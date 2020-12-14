import React, { FC } from 'react';
import { Container, Menu } from 'semantic-ui-react';

const Navbar: FC = () => {
	return (
		<Menu fixed="top" inverted>
			<Container>
				<Menu.Item as="a" header>
					Ecommerce-app
				</Menu.Item>
				<Menu.Item as="a">Products</Menu.Item>
				<Menu.Item as="a">Admin</Menu.Item>
				<Menu.Item as="a">Profile</Menu.Item>
			</Container>
		</Menu>
	);
};

export default Navbar;