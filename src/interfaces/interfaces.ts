export interface User {
    username: string,
    email: string,
    phone: string,
    password: string,
    orders: Array<Product>,
    isAdmin: boolean
}

export interface Product {
    name: string,
    desc: string,
    price: number, 
    img: string,
    category: string,
    postedBy: User
}