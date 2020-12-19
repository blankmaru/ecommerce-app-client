import React, { FC, useContext, useEffect, useState } from 'react';
import { Grid, Header } from 'semantic-ui-react';
import { IProduct } from '../interfaces/interfaces';
import axios, { AxiosResponse } from 'axios';
import { Button, Card } from 'semantic-ui-react';
import { BiBasket } from 'react-icons/bi';
import { apiURL } from '../config';
import { myContext } from '../context';

const Products: FC = () => {
	const ctx = useContext(myContext)
	const [products, setProducts] = useState<Array<IProduct>>([]);

	useEffect(() => {
		axios.get(`${apiURL}/api/products`).then((res: AxiosResponse) => {
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
								<Card style={{height: '250px'}}>
									<Card.Content>
										<Card.Header>{el.name}</Card.Header>
										<Card.Meta>price: ${el.price}</Card.Meta>
										<Card.Description>{el.desc}</Card.Description>
									</Card.Content>
									{ctx ? (
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
									) : (
										<Card.Content extra>
											<div className="ui two buttons">
												<Button onClick={() => window.location.href = '/login'} basic color="green">
													<BiBasket />
												</Button>
												<Button onClick={() => window.location.href = '/login'} basic color="blue">
													View
												</Button>
											</div>
										</Card.Content>
									)}
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
