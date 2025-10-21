import { ButtonFilter } from "../../ui/ButtonFilter/ButtonFilter"
import Search from '../../../assets/svg/search.svg?react'
import { useEffect, useRef, useState } from "react"
import Sort from '../../../assets/svg/sort.svg?react'
import { MediaItem } from "./MediaItem"
import { useLibrary } from "../../../hooks/useLibrary"
import type { LibraryItem } from "../../../data/myLibrary"

export const PlaylistList = () => {

  const [inputOpen,setInputOpen] = useState(false)

  
  useEffect(()=>{
    
    const handleClickOutside = (event: MouseEvent) =>{
      if (refMenuSort.current && !refMenuSort.current.contains(event.target as Node)){
        setMenuSortOpen(false)
      }
    }
    
    document.addEventListener('mousedown',handleClickOutside)

    return () => document.removeEventListener('mousedown',handleClickOutside)

  },[])



  const {data: myLibrary} = useLibrary()
  
  const [dataLibrary,setDataLibrary] = useState<LibraryItem[]>([])

  const refMenuSort = useRef<HTMLDivElement | null>(null)
  const [menuSortOpen,setMenuSortOpen] = useState(false)

  type sortOptions = 'alphabetical' | 'creator'

  const [sortBy,setSortBy] = useState<sortOptions>('alphabetical')

  useEffect(() => {
    if (!myLibrary) return

    const sorted = [...myLibrary].sort((a,b) => {
      if (sortBy == 'creator'){
        return a.artist.localeCompare(b.artist, undefined, { sensitivity: 'base' })
      } else {
        return a.title.localeCompare(b.title, undefined, { sensitivity: 'base' })
      }
    })

    setDataLibrary(sorted)

  },[sortBy, myLibrary])

  return (
    <>
            <div className="px-4">
                <div className="flex gap-3">
                    <ButtonFilter title="Playlist" />
                    <ButtonFilter title="Albums" />
                </div>
            </div>
            <div className="w-full self-start h-full overflow-hidden relative">
              <div className="w-full h-full max-h-full absolute top-0 left-0 overflow-y-scroll scroll-hidden">

                <div className="px-4 flex items-center justify-between">
                  <div className="relative">
                    <button onClick={() => setInputOpen(!inputOpen)} className="z-20 relative cursor-pointer bg-transparent outline-none border-none rounded-full w-8 h-8 flex items-center justify-center hover:bg-background-elevated-highlight transition-all duration-200"><Search className="w-5" /></button>
                    <input style={{opacity: inputOpen ? '1' : '0', left: inputOpen ? '0' : '-20px'}} type="text" className="z-10 absolute top-1/2 -translate-y-1/2 pl-8 py-1.5 outline-none text-[.93rem] bg-background-elevated-base rounded-[5px] transition-all duration-300" placeholder="Search in Your Library" />
                  </div>
                  <div className="relative" ref={refMenuSort} >
                    <button className="cursor-pointer" onClick={() => setMenuSortOpen(!menuSortOpen)}>
                      <span className="flex items-center justify-center gap-3 text-text-subdued">{sortBy.charAt(0).toUpperCase() + sortBy.slice(1)} <Sort className="w-3.5" /></span>
                    </button>
                    <ul className="bg-background-elevated-base rounded-[3px] w-[14rem] absolute top-[calc(100%_+_10px)] right-0 p-1 shadow-[0_16px_24px_rgba(0,_0,_0,_.3),_0_6px_8px_rgba(0,_0,_0,_.2)] origin-[90%_0px] transition-transform duration-300 ease-in-out" style={{scale: menuSortOpen ? '1':'0'}}>
                        <li className="px-3 py-2.5 text-[.8rem] text-text-subdued font-bold">Sort by</li>
                        <li onClick={() => setSortBy("alphabetical")} className="cursor-pointer w-full px-3 py-2.5 rounded-[2px] hover:bg-background-elevated-highlight flex items-center justify-between">Alphabetical</li>
                        <li onClick={() => setSortBy("creator")} className="cursor-pointer w-full px-3 py-2.5 rounded-[2px] hover:bg-background-elevated-highlight flex items-center justify-between">Creator</li>
                    </ul>
                  </div>

                </div>
                <div className="pb-2 w-full">
                  {dataLibrary.map((item: LibraryItem) => {
                    return <MediaItem key={item.id} {...item} />
                  })}
                  
                </div>
              </div>
            </div>
    </>
  )
}
