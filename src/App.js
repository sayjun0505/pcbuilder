import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Welcome from './pages/welcome';
import Info from './pages/info';
import Home from './pages/home';
import Mdetail from './pages/mdetail';
import Mboard from './pages/mboard';
import Ramdetail from './pages/ramdetail';
import Ramboard from './pages/ramboard';
import Storagedetail from './pages/storagedetail';
import Storageboard from './pages/storageboard';
import Casedetail from './pages/casedetail';
import Case from './pages/case';
import GPUdetail from './pages/gpudetail';
import GPU from './pages/gpu';


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
        {
          path: "/ramboard",
          element: <Ramboard />,
        },
        {
          path: "/ramdetail",
          element: <Ramdetail />,
        },
        {
          path: "/storageboard",
          element: <Storageboard />,
        },
        {
          path: "/storagedetail",
          element: <Storagedetail />,
        },
        {
          path: "/case",
          element: <Case />,
        },
        {
          path: "/casedetail",
          element: <Casedetail />,
        },
        {
          path: "/gpu",
          element: <GPU />,
        },
        {
          path: "/gpudetail",
          element: <GPUdetail />,
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
