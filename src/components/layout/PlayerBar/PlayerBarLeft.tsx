import { Link } from "react-router-dom"

export const PlayerBarLeft = () => {
  return (
    <div className="w-full h-full">
        <div className="h-full flex items-center gap-3">
          <div className="h-full">
            <img src="/media/images/avatar.jpg" alt="" className="h-full rounded-[5px]" />
          </div>
          <div className="flex flex-col">
            <Link to={'/album/'}>
              <span className="hover:underline underline-offset-2">Apocalipsis</span>
            </Link>
            <Link to={'/artist/'}>
              <span className="text-[.9rem] text-text-subdued hover:underline underline-offset-2">Cris MJ</span>
            </Link>
          </div>
        </div>
    </div>
  )
}
