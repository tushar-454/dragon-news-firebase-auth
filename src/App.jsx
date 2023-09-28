import { RouterProvider } from 'react-router-dom';
import routes from './Routes/router';

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
