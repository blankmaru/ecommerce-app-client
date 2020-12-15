import React, { FC } from 'react'
import { Header } from 'semantic-ui-react';
import { BsPlusSquare } from 'react-icons/bs'

const Admin: FC = () => {
    return (
        <div>
            <Header>Add new product</Header>
            <div>
                <BsPlusSquare size={30} />
            </div>
        </div>
    )
}

export default Admin;