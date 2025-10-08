import { Link } from 'react-router-dom'
import SpotifyLogo from '../../../assets/svg/spotify-logo.svg?react'
import { SearchBar } from '../../ui/SearchBar/SearchBar'


export const Navbar = () => {
  return (
    <>
        <div className="navbar h-[48px] max-h-[48px] grid grid-cols-3">
            <div className="flex flex-row items-center justify-start">
              <Link to={'/'}>
                <SpotifyLogo className='h-9 mx-5' />
              </Link>
            </div>
            <div className='flex flex-row items-center justify-center'>
              <SearchBar placeholder='What do you want to play?' />
            </div>
            <div>
              
            </div>
        </div>
    </>
  )
}
