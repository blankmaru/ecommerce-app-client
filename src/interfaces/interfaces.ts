export interface IUser {
    _id: string,
    username: string,
    email: string,
    phone: string,
    password: string,
    orders: Array<IProduct>,
    isAdmin: boolean
}

export interface IProduct {
    _id: string,
    name: string,
    desc: string,
    price: number, 
    img: string,
    category: string,
    postedBy: IUser
}