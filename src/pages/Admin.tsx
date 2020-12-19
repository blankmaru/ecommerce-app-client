import React, { FC, useContext, useState } from 'react';
import { Button, Form, Header, Modal } from 'semantic-ui-react';
import { BsPlusSquare } from 'react-icons/bs';
import { apiURL } from '../config';
import Axios, { AxiosResponse } from 'axios';
import { myContext } from '../context';

const Admin: FC = () => {
	const ctx = useContext(myContext);

	const [name, setName] = useState<string>('');
	const [desc, setDesc] = useState<string>('');
	const [price, setPrice] = useState<number>();
	const [category, setCategory] = useState<string>('');

	const [open, setOpen] = useState<boolean>(false);

	const createProduct = () => {
		Axios.post(
			`${apiURL}/api/products`,
			{
				name,
				desc,
				price,
				category,
				postedBy: ctx.id,
			},
			{
				withCredentials: true,
			}
		).then((res: AxiosResponse) => {
            if (res.data.message === 'success') {
                setOpen(false);
                window.location.href = '/'
            }
        })
        .catch((err: Error) => {
            console.log(err)
        })
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
			</div>
		</div>
	);
};

export default Admin;
