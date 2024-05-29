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
import PrivateRoute from './PrivateRoute';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import CategoriesCard from '../components/Category/CategoriesCard';
import MyProfile from '../Pages/MyProfile/MyProfile';

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        errorElement: <ErrorPage/>,
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
                path: '/categories/:name',
                element: <CategoriesCard/>
            },
            {
                path: '/product/:id',
                element: <PrivateRoute>
                    <ProductDetails/>
                </PrivateRoute>,
                loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/product/${params.id}`),
            },
            {
                path: '/purchase/:id',
                element: <PrivateRoute>
                    <Purchase/>
                </PrivateRoute>,
                loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/product/${params.id}`),
            },
            {
                path: '/add-product',
                element: <PrivateRoute>
                    <AddProduct/>
                </PrivateRoute>
            },
            {
                path: '/my-add-products',
                element: <PrivateRoute>
                    <MyProduct/>
                </PrivateRoute>
            },
            {
                path: '/update/:id',
                element: <PrivateRoute>
                    <UpdateProduct/>
                </PrivateRoute>,
                loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/product/${params.id}`)
            },
            {
                path: '/my-order',
                element: <PrivateRoute>
                    <MyOrder/>
                </PrivateRoute>
            },
            {
                path: '/all-foods',
                element: <AllFoods/>
            },
            {
                path: '/gallery',
                element: <Gallery/>
            },
            {
                path: '/my-profile',
                element: <PrivateRoute>
                    <MyProfile/>
                </PrivateRoute>
            }
        ])
    }
])

export default Routes;