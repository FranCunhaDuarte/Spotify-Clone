import { Outlet } from "react-router-dom"
import { MainContent } from "../components/layout/MainContent/MainContent"
import { Navbar } from "../components/layout/Navbar/Navbar"
import { PlayerBar } from "../components/layout/PlayerBar/PlayerBar"

export const Dashboard = () => {
  return (
    <>
        <main className="main-home-dashboard grid p-2 w-screen h-screen gap-2">
            <Navbar />
            <MainContent>
              <Outlet />
            </MainContent>
            <PlayerBar />
        </main>
    </>
  )
}
