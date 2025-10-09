import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"

export const ProfileMenu = () => {

  const [menuOpen,setMenuOpen] = useState(false)

  const menuRef = useRef<HTMLDivElement | null>(null)

  useEffect(()=>{

    const handleClickOutsideMenu = (event: MouseEvent) => {
        if(menuRef.current && !menuRef.current.contains(event.target as Node)){
            setMenuOpen(false)
        }
    }

    document.addEventListener('mousedown',handleClickOutsideMenu)

    return () => document.removeEventListener('mousedown',handleClickOutsideMenu)

  },[])

  return (
    <>
        <div ref={menuRef} className="relative">
            <div onClick={() => setMenuOpen(!menuOpen)} className="bg-background-base p-2 rounded-full hover:scale-105 duration-300 ease-in-out transition-transform cursor-pointer">
                <img src="/media/images/avatar.jpg"  alt="avatar" className="w-8 rounded-full" />
            </div>
            <ul  className="bg-background-elevated-base rounded-[3px] w-[14rem] absolute top-full right-0 p-1 shadow-[0_16px_24px_rgba(0,_0,_0,_.3),_0_6px_8px_rgba(0,_0,_0,_.2)] origin-top-right transition-transform duration-300 ease-in-out" style={{scale: menuOpen ? '1':'0'}}>
                <Link to='/user'><li className="cursor-pointer w-full px-3 py-2.5 rounded-[2px] hover:bg-background-elevated-highlight">Profile</li></Link>
                <Link to='https://www.linkedin.com/in/francocunhaduarte/' target="_blank"><li className="cursor-pointer w-full px-3 py-2.5 rounded-[2px] hover:bg-background-elevated-highlight">LinkedIn</li></Link>
                <Link to='https://github.com/FranCunhaDuarte/Spotify-Clone' target="_blank"><li className="cursor-pointer w-full px-3 py-2.5 rounded-[2px] hover:bg-background-elevated-highlight">Respository</li></Link>
            </ul>
        </div>
    </>
  )
}
