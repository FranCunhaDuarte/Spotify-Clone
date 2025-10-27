import { createRoot } from 'react-dom/client'
import './style/index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Dashboard } from './pages/Dashboard';
import { TokenContext } from './contexts/tokenContext';
import { useToken } from './hooks/useToken';
import { Home } from './components/sections/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      { index: true, element: <Home />}
    ]
  }
]);

export const Main  = () =>{

  const {token,loading,error} = useToken()

  return (
    <TokenContext.Provider value={{token,loading,error}}>
      <RouterProvider router={router} />
    </TokenContext.Provider>
  )
}

createRoot(document.getElementById('root')!).render(<Main/>)
