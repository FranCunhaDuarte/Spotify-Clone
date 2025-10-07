import { createRoot } from 'react-dom/client'
import './style/index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from './pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    // children: [
    //   { index: true,  }
    // ]
  }
]);


createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
