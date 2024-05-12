import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layouts/Root';

import Login from '../Pages/Login/Login';
import Home from '../Pages/Home/Home';
import Register from '../Pages/Register/Register';
import ProductDetails from '../Pages/Product/ProductDetails';
import Purchase from '../Pages/Product/Purchase';
import AddProduct from '../Pages/Product/AddProduct';
import MyProduct from '../Pages/Product/MyProducts';
import UpdateProduct from '../Pages/Product/UpdateProduct';
import MyOrder from '../Pages/MyOrder/MyOrder';
import AllFoods from '../Pages/Product/AllFoods';
import Gallery from '../Pages/Gallery/Gallery';

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        children: ([
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/product/:id',
                element: <ProductDetails/>,
                loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/product/${params.id}`),
            },
            {
                path: '/purchase/:id',
                element: <Purchase/>,
                loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/product/${params.id}`),
            },
            {
                path: '/add-product',
                element: <AddProduct/>
            },
            {
                path: '/my-add-products',
                element: <MyProduct/>
            },
            {
                path: '/update/:id',
                element: <UpdateProduct/>,
                loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/product/${params.id}`)
            },
            {
                path: '/my-order',
                element: <MyOrder/>
            },
            {
                path: '/all-foods',
                element: <AllFoods/>
            },
            {
                path: '/gallery',
                element: <Gallery/>
            }
        ])
    }
])

export default Routes;