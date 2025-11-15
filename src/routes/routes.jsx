import { createBrowserRouter } from 'react-router';
import Root from '../layout/Root';
import Home from '../pages/Home';
import Test from '../pages/Test';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            { index: true, element: <Home /> },
            { path: '/test', element: <Test /> }
        ]
    }
]);