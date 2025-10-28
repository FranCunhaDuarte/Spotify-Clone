import PlayingView from '../../../assets/svg/playingView.svg?react'
import Lyrics from '../../../assets/svg/lyrics.svg?react'
import Queue from '../../../assets/svg/queue.svg?react'
import Devices from '../../../assets/svg/devices.svg?react'
import FullScreen from '../../../assets/svg/fullScreen.svg?react'
import IconBox from '../../ui/IconBox/IconBox'




export const PlayerBarRight = () => {

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };



  return (
    <div className="w-full h-full pr-2">
      <div className='w-full h-full'>
        <div className='h-full flex items-center justify-end gap-5'>
          <IconBox title='Player View' direction='up'>
            <button className='cursor-pointer'>
              <PlayingView />
            </button>
          </IconBox>
          <IconBox title='Lyrics' direction='up'>
            <button className='cursor-pointer'>
              <Lyrics />
            </button>
          </IconBox>
          <IconBox title='Queue' direction='up'>
            <button className='cursor-pointer'>
              <Queue />
            </button>
          </IconBox>
          <IconBox title='Devices' direction='up'>
            <button className='cursor-pointer'>
              <Devices />
            </button>
          </IconBox>
          <IconBox title='Full Screen' direction='up' position='right'>
            <button className='cursor-pointer' onClick={() => toggleFullscreen()}>
              <FullScreen />
            </button>
          </IconBox>
        </div>
      </div>
    </div>
  )
}
