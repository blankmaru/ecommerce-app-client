import React, { FC } from 'react';
import { Container, List, Segment } from 'semantic-ui-react';

const Footer: FC = () => {
	return (
		<Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em', marginTop: '30rem' }}>
			<Container textAlign="center">
				<List horizontal inverted divided link size="small">
					<List.Item as="a" href="#">
						@blankmaru
					</List.Item>
					<List.Item as="a" href="#">
						Github
					</List.Item>
				</List>
			</Container>
		</Segment>
	);
};

export default Footer;