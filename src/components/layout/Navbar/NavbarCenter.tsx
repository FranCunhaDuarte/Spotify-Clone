import { Link } from 'react-router-dom'
import { SearchBar } from '../../ui/SearchBar/SearchBar'
import IconBox from '../../ui/IconBox/IconBox'
import Home from '../../../assets/svg/home.svg?react'
import HomeActive from '../../../assets/svg/homeActive.svg?react'
import { useRouteCheck } from '../../../hooks/useRouteCheck'

export const NavbarCenter = () => {
    
  const {isHome} = useRouteCheck()


  return (
    <>
        <div className='absolute top-0 left-1/2 -translate-x-1/2 flex flex-row items-center justify-center'>
            <Link to='/' className='rounded-full'>
                <IconBox title='Home' direction='down'>
                <div className='bg-background-elevated-base p-3 rounded-full mr-2 hover:bg-background-elevated-highlight transition-all duration-300'>
                                {isHome ? <HomeActive /> : <Home />}
                </div>
                </IconBox>
            </Link>
            <SearchBar placeholder='What do you want to play?' />
        </div>
    </>
  )
}

