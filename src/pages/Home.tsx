import React, { FC } from 'react';
import { Header } from 'semantic-ui-react';

const Home: FC = () => {
	return (
		<div>
			<Header as="h1">HOME PAGE TEMPLATE</Header>
			<p>This is a basic fixed menu template using fixed size containers.</p>
			<p>A text container is used for the main container, which is useful for single column layouts.</p>
		</div>
	);
};

export default Home;
