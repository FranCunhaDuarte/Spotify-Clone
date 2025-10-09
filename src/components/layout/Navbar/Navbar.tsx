import { NavbarCenter } from './NavbarCenter'
import { NavbarLeft } from './NavbarLeft'
import { NavbarRight } from './NavbarRight'


export const Navbar = () => {
  return (
    <>
        <div className="relative navbar h-[48px] max-h-[48px] w-full flex justify-between">
            <NavbarLeft />
            <NavbarCenter />
            <NavbarRight />
        </div>
    </>
  )
}
