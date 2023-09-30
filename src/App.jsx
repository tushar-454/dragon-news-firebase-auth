import { RouterProvider } from 'react-router-dom';
import AuthProvider from './Components/Provider/AuthProvider';
import routes from './Routes/router';

function App() {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={routes} />
      </AuthProvider>
    </>
  );
}

export default App;
