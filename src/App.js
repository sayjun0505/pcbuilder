import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Welcome from './pages/welcome';
import Info from './pages/info';
import Home from './pages/home';
import Mdetail from './pages/mdetail';
import Mboard from './pages/mboard';
import MainLayout from './layouts/MainLayout';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Welcome />,
        },
        {
          path: "/cpu",
          element: <Home />,
        },
        {
          path: "/info",
          element: <Info />,
        },
        {
          path: "/mboard",
          element: <Mboard />,
        },
        {
          path: "/mdetail",
          element: <Mdetail />,
        },
      ]
    }
  ]
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
