import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Welcome from './pages/welcome';
import Info from './pages/info';
import Home from './pages/home';
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
