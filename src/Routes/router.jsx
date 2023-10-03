import { createBrowserRouter } from 'react-router-dom';
import About from '../Components/About/About';
import Career from '../Components/Career/Career';
import ForgotPassword from '../Components/ForgotPassword/ForgotPassword';
import Home from '../Components/Home/Home';
import DetailsNews from '../Components/HomeNews/DetailsNews';
import HomeNews from '../Components/HomeNews/HomeNews';
import Login from '../Components/Login/Login';
import PrivateRoute from '../Components/PrivateRoute/PrivateRoute';
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
        loader: async () => fetch('/menu.json'),
        children: [
          {
            path: '/',
            element: <HomeNews />,
            loader: async () => fetch('/news.json'),
          },
          {
            path: '/:category/:id',
            element: <HomeNews />,
            loader: async () => fetch('/news.json'),
          },
          {
            path: '/:newsId',
            element: (
              <PrivateRoute>
                <DetailsNews />
              </PrivateRoute>
            ),
            loader: async () => fetch('/news.json'),
          },
          {
            path: '/about',
            element: (
              <PrivateRoute>
                <About />
              </PrivateRoute>
            ),
          },
          {
            path: '/career',
            element: (
              <PrivateRoute>
                <Career />
              </PrivateRoute>
            ),
          },
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
      {
        path: '/forgot-password',
        element: <ForgotPassword />,
      },
    ],
  },
]);

export default routes;
