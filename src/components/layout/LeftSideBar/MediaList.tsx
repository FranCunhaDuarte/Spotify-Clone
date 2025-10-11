import { ButtonFilter } from "../../ui/ButtonFilter/ButtonFilter"
import Search from '../../../assets/svg/search.svg?react'
import { useEffect, useRef, useState } from "react"
import Sort from '../../../assets/svg/sort.svg?react'

export const PlaylistList = () => {

  

  const [inputOpen,setInputOpen] = useState(false)

  const [menuSortOpen,setMenuSortOpen] = useState(false)

  const refMenuSort = useRef<HTMLDivElement | null>(null)

  useEffect(()=>{

    const handleClickOutside = (event: MouseEvent) =>{
      if (refMenuSort.current && !refMenuSort.current.contains(event.target as Node)){
        setMenuSortOpen(false)
      }
    }

    document.addEventListener('mousedown',handleClickOutside)

    return () => document.removeEventListener('mousedown',handleClickOutside)

  },[])

  return (
    <>
        <div className="flex flex-col h-full">
            <div className="">
                <div className="px-4 flex gap-3 my-3">
                    <ButtonFilter title="Playlist" />
                    <ButtonFilter title="Albums" />
                </div>
                <div className="px-4 flex items-center justify-between">
                  <div className="relative">
                    <button onClick={() => setInputOpen(!inputOpen)} className="z-20 relative cursor-pointer bg-transparent outline-none border-none rounded-full w-8 h-8 flex items-center justify-center hover:bg-background-elevated-highlight transition-all duration-200"><Search className="w-5" /></button>
                    <input style={{opacity: inputOpen ? '1' : '0', left: inputOpen ? '0' : '-20px'}} type="text" className="z-10 absolute top-1/2 -translate-y-1/2 pl-8 py-1.5 outline-none text-[.93rem] bg-background-elevated-base rounded-[5px] transition-all duration-300" placeholder="Search in Your Library" />
                  </div>
                  <div className="relative" ref={refMenuSort} >
                    <button className="cursor-pointer" onClick={() => setMenuSortOpen(!menuSortOpen)}>
                      <span className="flex items-center justify-center gap-3 text-text-subdued">Recents <Sort className="w-3.5" /></span>
                    </button>
                    <ul className="bg-background-elevated-base rounded-[3px] w-[14rem] absolute top-[calc(100%_+_10px)] right-0 p-1 shadow-[0_16px_24px_rgba(0,_0,_0,_.3),_0_6px_8px_rgba(0,_0,_0,_.2)] origin-[90%_0px] transition-transform duration-300 ease-in-out" style={{scale: menuSortOpen ? '1':'0'}}>
                        <li className="cursor-pointer w-full px-3 py-2.5 rounded-[2px] hover:bg-background-elevated-highlight flex items-center justify-between">Profile</li>
                    </ul>
                  </div>
                </div>
            </div>
            <div className="w-full h-full">

            </div>
        </div>
    </>
  )
}
