import { createBrowserRouter } from 'react-router-dom';
import About from '../Components/About/About';
import Career from '../Components/Career/Career';
import Home from '../Components/Home/Home';
import Login from '../Components/Login/Login';
import Register from '../Components/Register/Register';
import Layout from './Layout';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('/menu.json'),
        children: [
          { path: '/about', element: <About /> },
          { path: '/career', element: <Career /> },
        ],
      },
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
