
import { CenterContent } from "../CenterContent/CenterContent"
import { LeftSideBar } from "../LeftSideBar/LeftSideBar"
import { RightSadBar } from "../RightSideBar/RightSadBar"

type MainContentProps = {
  children: React.ReactElement | null
}

export const MainContent = (props: MainContentProps) => {

  const {children} = props

  return (
    <>
        <div className="main-content h-full grid grid-cols-[auto_1fr_auto] gap-2">
            <LeftSideBar />
            <CenterContent>
              {children}
            </CenterContent>
            <RightSadBar />
        </div>
    </>
  )
}
