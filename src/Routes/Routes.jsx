import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layouts/Root';

import Login from '../Pages/Login/Login';
import Home from '../Pages/Home/Home';
import Register from '../Pages/Register/Register';

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        children: ([
            {
                path: '/',
                element: <Home/>,
                loader: ()=> fetch(`${import.meta.env.VITE_API_URL}/products`)
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            }
        ])
    }
])

export default Routes;