import { Link } from "react-router-dom"
import PlayBlack from '../../../assets/svg/playBlack.svg?react'
import { useState } from "react"
import type { LibraryItem } from "../../../data/myLibrary"


export const MediaCard = (props: LibraryItem) => {

    const {artist,id,image,title,type} = props

    const [hover,setHover] = useState(false)

  return (
    <>
        <Link to={`/${type}/${id}`}>
            <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className="p-3 rounded-[5px] transition-all duration-300 w-min" style={{backgroundColor: hover ? 'var(--color-background-highlight)' : undefined }}>
                <div className="w-44 relative">
                    <div className="shadow-[0_8px_24px_rgba(0,_0,_0,_.5)]" style={{overflow: type === 'artist' ? 'hidden' : undefined, borderRadius: type === 'artist' ? '50%' : undefined}}>
                        <img src={image} alt="" className="rounded-[7px]"  />
                    </div>
                    <div className="">
                        <div className="w-10 h-10 bg-essential-bright-accent absolute bottom-0 right-3 rounded-full flex items-center justify-center opacity-0 pointer-events-none transition-all duration-300" style={{opacity: hover ? '1' : undefined, bottom: hover ? '0.75rem' : undefined}}>
                            <PlayBlack />
                        </div>
                    </div>
                </div>
                <div className="pt-2.5">
                    <h3 className="leading-4 truncate max-w-40 text-essential-base">{title}</h3>
                    {type === 'album' && (
                    <Link to='/artist/'>
                        <span className="text-[.9rem] text-text-subdued hover:underline underline-offset-2 truncate max-w-40">{artist}</span>
                    </Link>)}

                    {type === 'artist' && (
                        <span className="text-[.9rem] text-text-subdued truncate max-w-40">Artist</span>)}
                </div>
            </div>
        </Link>
    </>
  )
}
