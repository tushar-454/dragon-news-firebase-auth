import { createBrowserRouter } from 'react-router-dom';
import Home from '../Components/Home/Home';
import Login from '../Components/Login/Login';
import Register from '../Components/Register/Register';
import Layout from './Layout';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home />, loader: () => fetch('/menu.json') },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
]);

export default routes;
