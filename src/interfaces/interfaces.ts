export interface IUser {
    id: string,
    username: string,
    email: string,
    phone: string,
    password: string,
    orders: Array<IProduct>,
    isAdmin: boolean
}

export interface IProduct {
    name: string,
    desc: string,
    price: number, 
    img: string,
    category: string,
    postedBy: IUser
}