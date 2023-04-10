import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import { addProduct, deleteProduct, getAllProduct, updateProduct1 } from './api/product'
import ProductAdd from './pages/Admin/ProductAdd'
import AdminProduct from './pages/Admin/AdminProduct'
import UpdateProduct from './pages/Admin/UpdateProduct'
import { IProduct } from './type/product'
import WebsiteLayout from './pages/Layouts/WebsiteLayout'
import Login from './pages/login'
import Homepage from './pages/Homepage';
import ProductPage from './pages/Product';
import ProductDetailPage from './pages/ProductDetail';
import AdminLayout from './pages/Layouts/AdminLayout';


function App() {
  const [products, setProducts] = useState<IProduct[]>([])
  useEffect(() => {
    getAllProduct().then(({ data }) => setProducts(data))
  }, [])
  const onHandleRemove = (id: number) => {
    deleteProduct(id).then(() => setProducts(products.filter((item: IProduct) => item._id !== id)))
  }
  const onHandleAdd = (product: any) => {
    addProduct(product).then(() => getAllProduct().then(({ data }) => setProducts(data)))
  }

  const onHandleUpdate = (product: any) => {
    // .then(() => getAllProduct().then(({ data }) => setProducts(data)))
    updateProduct1(product);
    console.log(product)
  }



  return (
    <div className="App">
      <Routes>
        {/* client */}
        <Route path='/' element={<WebsiteLayout />}>
          <Route index element={<Homepage />} />
          <Route path='product'>
            <Route index element={<ProductPage />} />
            <Route path=':id' element={<ProductDetailPage />} />
          </Route>
        </Route>
        {/* admin */}
        <Route path='/admin' element={<AdminLayout />}>
          <Route path='products'>
            {/* products={products} onRemove={onHandleRemove} onUpdate={onHandleUpdate} */}
            <Route index element={<AdminProduct data={products} OnRemove={onHandleRemove} />} />
            <Route path='add' element={<ProductAdd onAdd={onHandleAdd} />} />
            <Route path='Update/:id' element={<UpdateProduct OnUpdate={onHandleUpdate} products={products} />} />
          </Route>
        </Route>


        <Route path='/login' element={<Login />}></Route>

      </Routes>
    </div>
  )
}
export default App;
