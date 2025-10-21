import { Link, useLocation } from "react-router-dom"
import type { LibraryItem } from "../../../data/myLibrary"
import { useEffect, useState } from "react"

export const MediaItem = (props: LibraryItem) => {

    
    const { type, id, title, artist, image } = props
    
    const pathname = useLocation().pathname

    const [isActive,setIsActive] = useState(false)

    useEffect(() => {
        const getActiveItem = (pathname: string): void => {
            const match = pathname.match(/^\/(album|playlist)\/([^/]+)/);
            if (!match) return setIsActive(false);
    
            return setIsActive(true);
        };
    
        getActiveItem(pathname)
    },[pathname])
    


  return (
    <>
        <Link to={`/${type}/${id}`}>
            <div className="w-full bg-transparent px-2">
                <div className="w-full h-full hover:bg-background-elevated-highlight p-2 rounded-[5px] transition-all duration-300 flex" style={{backgroundColor: isActive ? 'var(--color-essential-bright-accent)': undefined}}>
                    <div className="w-12">
                        <img src={image} alt="" className="w-12 h-12 object-cover rounded-[3px]" />
                    </div>
                    <div className="h-full pl-4 flex flex-col">
                        <div className="">
                            <span className="text-[1.05rem]">{title}</span>
                        </div>
                        <div className="flex gap-1.5 items-center text-text-subdued text-[.9rem]">
                            <span>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
                            <span className="w-1 h-1 bg-text-subdued rounded-full"></span>
                            <span>{artist}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    </>
  )
}
