import { createRoot } from 'react-dom/client'
import './style/index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from './pages/Home';
import { TokenContext } from './contexts/context';
import { useToken } from './hooks/useToken';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    // children: [
    //   { index: true,  }
    // ]
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


// TEMA A VER PENDIENTE, USECONTEXT PARA EL TOKEN DE LA API AL SERVER DE BACK QUE HICE