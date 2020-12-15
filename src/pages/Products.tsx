import React, { FC, useEffect, useState } from 'react';
import { Grid, Header } from 'semantic-ui-react';
import { Product } from '../interfaces/interfaces';
import axios, { AxiosResponse } from 'axios';
import { Button, Card } from 'semantic-ui-react';
import { BiBasket } from 'react-icons/bi';

const Products: FC = () => {
	const [products, setProducts] = useState<Array<Product>>([]);

	useEffect(() => {
		axios.get('http://46.101.154.231/api/products').then((res: AxiosResponse) => {
			console.log(res.data);
			setProducts(res.data);
		});
	}, []);

	return (
		<>
			<Header as="h1">All products</Header>
			<Grid>
				<Grid.Row>
					{products.map((el) => {
						return (
							<Grid.Column width={4}>
								<Card>
									<Card.Content>
										<Card.Header>{el.name}</Card.Header>
										<Card.Meta>price: ${el.price}</Card.Meta>
										<Card.Description>{el.desc}</Card.Description>
									</Card.Content>
									<Card.Content extra>
										<div className="ui two buttons">
											<Button basic color="green">
												<BiBasket />
											</Button>
											<Button basic color="blue">
												View
											</Button>
										</div>
									</Card.Content>
								</Card>
							</Grid.Column>
						);
					})}
				</Grid.Row>
			</Grid>
		</>
	);
};

export default Products;
