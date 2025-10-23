import { NavbarCenter } from './NavbarCenter'
import { NavbarLeft } from './NavbarLeft'
import { NavbarRight } from './NavbarRight'


export const Navbar = () => {
  return (
    <>
        <div className="relative navbar h-full w-full flex items-center justify-between py-2">
            <NavbarLeft />
            <NavbarCenter />
            <NavbarRight />
        </div>
    </>
  )
}
