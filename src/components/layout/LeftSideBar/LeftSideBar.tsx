import { HeaderSideBar } from "./HeaderSideBar"
import { PlaylistList } from "./MediaList"

export const LeftSideBar = () => {
  return (
    <>
        <div className="bg-background-base rounded-[7px]">
            <HeaderSideBar />
            <PlaylistList />
        </div>
    </>
  )
}
