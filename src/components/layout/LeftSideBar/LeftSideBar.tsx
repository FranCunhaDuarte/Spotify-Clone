import { useState } from "react"
import { HeaderSideBar } from "./HeaderSideBar"
import { PlaylistList } from "./MediaList"

export const LeftSideBar = () => {

  const [hover,setHover] = useState(false)

  return (
    <>
        <div onMouseLeave={() => setHover(false)} onMouseEnter={() => setHover(true)} className="bg-background-base rounded-[7px] grid grid-rows-[60px_60px_1fr] items-center">
            <HeaderSideBar hoverLeftSideBar={hover} />
            <PlaylistList />
        </div>
    </>
  )
}
