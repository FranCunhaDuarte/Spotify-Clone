import { Link } from 'react-router-dom'
import SpotifyLogo from '../../../assets/svg/spotify-logo.svg?react'

export const NavbarLeft = () => {
  return (
    <>
        <div className="flex flex-row items-center justify-start">
            <Link to={'/'}>
                <SpotifyLogo className='h-9 mx-5' />
            </Link>
        </div>
    </>
  )
}
