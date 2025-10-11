import { MainContent } from "../components/layout/MainContent/MainContent"
import { Navbar } from "../components/layout/Navbar/Navbar"

export const Home = () => {
  return (
    <>
        <main className="main-home-dashboard grid p-2 w-screen h-screen gap-2">
            <Navbar />
            <MainContent />
            <div className="mediaplayer h-[72px]"></div>
        </main>
    </>
  )
}
