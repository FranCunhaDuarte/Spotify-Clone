import { LeftSideBar } from "../LeftSideBar/LeftSideBar"


export const MainContent = () => {
  return (
    <>
        <div className="main-content h-full grid grid-cols-[400px_1fr_400px] gap-2">
            <LeftSideBar />
        </div>
    </>
  )
}
