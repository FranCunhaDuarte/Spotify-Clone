import { useLocation } from "react-router-dom";



interface RouteCheckReturn {
  isHome: boolean
  isSearch: boolean
  isPlaylist: boolean
  isAlbum: boolean
  isUser: boolean
  
  checkRoute: (path: string) => boolean
  
  currentPath: string
}

export const useRouteCheck = (): RouteCheckReturn => {
  const location = useLocation()

  const isHome = location.pathname === '/'
  const isSearch = location.pathname === '/search'
  const isPlaylist = location.pathname === '/playlist'
  const isAlbum = location.pathname === '/album'
  const isUser = location.pathname === '/user'

  const checkRoute = (path: string) =>{
    return path === location.pathname
  }

  return {
    isHome,
    isSearch,
    isPlaylist,
    isAlbum,
    isUser,
    checkRoute,
    currentPath: location.pathname
  }
  
}