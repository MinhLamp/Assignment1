import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
  }, [])

  const removeProduct = (id) =>{
    fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE"
    }).then(() => setProducts(products.filter((item) => item.id != id)))
  }

  return (
    <>
    <Routes>
    <Route path='/' element={<Homepage products={products} />} />
        <Route path='/detail/:id' element={<DetailPage products={products} />} />
        <Route path='/admin' element={<Dashboard />} />
        <Route path='/admin/product' element={<ProductPage products={products} removeProduct={removeProduct} />} />
        <Route path='/admin/product/add' element={<AddProduct />} />
        <Route path='/admin/product/update/:id' element={<UpdateProductPage />} />
    </Routes>
    </>
  )
}

export default App
