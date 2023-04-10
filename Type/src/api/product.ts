import instance from "./insntace";
interface IProduct {
    id: number,
    name: string,
    price: number,
    image: string,
    description: string,
}
const getAllProduct = () => {
    return instance.get("/products");
}
const getOneProduct = (id: number) => {
    return instance.get('/products/' + id)
}
const deleteProduct = (id: number) => {
    return instance.delete('/products/' + id)
}
const addProduct = (product: IProduct) => {
    return instance.post('/products', product)
}
const updateProduct1 = (product: any) => {
    return instance.put('/products/' + product._id, product)
}
export { getAllProduct, getOneProduct, deleteProduct, addProduct, updateProduct1 }