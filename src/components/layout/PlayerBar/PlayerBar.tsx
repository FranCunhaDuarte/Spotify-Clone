import { PlayerBarCenter } from "./PlayerBarCenter"
import { PlayerBarLeft } from "./PlayerBarLeft"
import { PlayerBarRight } from "./PlayerBarRight"

export const PlayerBar = () => {
  return (
    <div className="relative h-full w-full flex items-center justify-between py-2">
        <PlayerBarLeft />
        <PlayerBarCenter />
        <PlayerBarRight />
    </div>
  )
}
