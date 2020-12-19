import React, { FC, useContext, useEffect, useState } from 'react';
import { Button, Form, Header, Modal, Table } from 'semantic-ui-react';
import { BsPlusSquare } from 'react-icons/bs';
import { apiURL } from '../config';
import Axios, { AxiosResponse } from 'axios';
import { myContext } from '../context';
import { IProduct } from '../interfaces/interfaces';
import { AiOutlineDelete, AiOutlineReload } from 'react-icons/ai';

const Admin: FC = () => {
	const ctx = useContext(myContext);

	const [name, setName] = useState<string>('');
	const [desc, setDesc] = useState<string>('');
	const [price, setPrice] = useState<number>();
	const [category, setCategory] = useState<string>('');

	const [createdProducts, setCreatedProducts] = useState<Array<IProduct>>([]);

	const [open, setOpen] = useState<boolean>(false);

	useEffect(() => {
		Axios.get(`${apiURL}/api/products`, {
			withCredentials: true,
		}).then((res: AxiosResponse) => {
            setCreatedProducts(res.data);
            console.log(res.data)
		});
	}, []);

	const createProduct = () => {
		Axios.post(
			`${apiURL}/api/products`,
			{
				name,
				desc,
				price,
				category,
				postedBy: ctx._id,
			},
			{
				withCredentials: true,
			}
		)
			.then((res: AxiosResponse) => {
				if (res.data.message === 'success') {
					setOpen(false);
					window.location.href = '/';
				}
			})
			.catch((err: Error) => {
				console.log(err);
			});
	};

	const deleteProduct = (id: string) => {
        console.log(id)
		Axios.delete(`${apiURL}/api/products/${id}`, { withCredentials: true }).then((res: AxiosResponse) => {
			window.location.href = '/admin';
		});
	};

	return (
		<div style={{ display: 'flex' }}>
			<div>
				<Header>Add new product</Header>
				<Modal
					onClose={() => setOpen(false)}
					onOpen={() => setOpen(true)}
					open={open}
					trigger={
						<div style={{ cursor: 'pointer' }}>
							<BsPlusSquare size={30} />
						</div>
					}
				>
					<Modal.Header>ADD NEW PRODUCT</Modal.Header>
					<Modal.Content>
						<Form>
							<Form.Field>
								<label>Name</label>
								<input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
							</Form.Field>
							<Form.Field>
								<Form.TextArea
									label="Description"
									placeholder="Description"
									value={desc}
									onChange={(e) => setDesc(e.target.value)}
								/>
							</Form.Field>
							<Form.Field>
								<label>Price</label>
								<input
									placeholder="Price $$$"
									type="number"
									value={price}
									onChange={(e) => setPrice(parseInt(e.target.value))}
								/>
							</Form.Field>
							{/* <Form.Field>
								<label>Product image</label>
								<form onSubmit={() => uploadFile()}>
									<div style={{ display: 'flex' }}>
										<input type="file" id="file" name="filename" />
										<input type="submit" value="Upload" />
									</div>
								</form>
							</Form.Field> */}
							<Form.Field>
								<label>Category</label>
								<select onChange={(e) => setCategory(e.target.value)}>
									<option value="Shoes">Shoes</option>
									<option value="Bags">Bags</option>
									<option value="Shorts">Shorts</option>
								</select>
							</Form.Field>
						</Form>
					</Modal.Content>
					<Modal.Actions>
						<Button color="black" onClick={() => setOpen(false)}>
							Cancel
						</Button>
						<Button
							content="Create"
							labelPosition="right"
							icon="checkmark"
							onClick={() => createProduct()}
							positive
						/>
					</Modal.Actions>
				</Modal>
			</div>
			<div style={{ marginLeft: '2rem' }}>
				<Header>Created products</Header>
				<Table striped style={{ width: '500px' }}>
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell>Name</Table.HeaderCell>
							<Table.HeaderCell>Price</Table.HeaderCell>
							<Table.HeaderCell>Delete</Table.HeaderCell>
                            <Table.HeaderCell>Update</Table.HeaderCell>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						{createdProducts.map((item) => {
							return (
								<Table.Row>
									<Table.Cell>{item.name}</Table.Cell>
									<Table.Cell>{item.price}</Table.Cell>
									<Table.Cell>
										<AiOutlineDelete
											onClick={() => deleteProduct(item._id)}
											style={{ cursor: 'pointer' }}
										/>
									</Table.Cell>
                                    <Table.Cell>
										<AiOutlineReload
											onClick={() => deleteProduct(item._id)}
											style={{ cursor: 'pointer' }}
										/>
									</Table.Cell>
								</Table.Row>
							);
						})}
					</Table.Body>
				</Table>
			</div>
		</div>
	);
};

export default Admin;
