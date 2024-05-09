import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layouts/Root';

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root/>
    }
])

export default Routes;