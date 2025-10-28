import Shuffle from '../../../assets/svg/shuffle.svg?react'
import NextTrack from '../../../assets/svg/nextTrack.svg?react'
import PlayBlack from '../../../assets/svg/playBlack.svg?react'
import Loop from '../../../assets/svg/loop.svg?react'
import IconBox from '../../ui/IconBox/IconBox'


export const PlayerBarCenter = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className='w-full flex flex-col gap-1'>
        <div className='flex items-center justify-center gap-5'>
          <IconBox title='Shuffle' direction='up'>
            <button className='cursor-pointer'>
              <Shuffle />
            </button>
          </IconBox>
          <IconBox title='Previous' direction='up'>
            <button className='cursor-pointer'>
              <NextTrack className='rotate-180' />
            </button>
          </IconBox>
          <IconBox title='Play' direction='up'>
            <button className='cursor-pointer w-8 h-8 bg-white rounded-full flex items-center justify-center'>
              <PlayBlack />
            </button>
          </IconBox>
          <IconBox title='Next' direction='up'>
            <button className='cursor-pointer'>
              <NextTrack />
            </button>
          </IconBox>
          <IconBox title='Loop' direction='up'>
            <button className='cursor-pointer'>
              <Loop />
            </button>
          </IconBox>
        </div>
        <div>
          <div className='flex items-center justify-center gap-1.5'>
            <span className='text-[.8rem]'>0:00</span>
            <div className='relative w-full h-1'>
              <div className='absolute rounded-full w-full h-1 bg-background-elevated-highlight'></div>
              <div className='absolute rounded-full w-1/2 h-1 bg-white'></div>
            </div>
            <span className='text-[.8rem]'>0:00</span>
          </div>
        </div>
      </div>
    </div>
  )
}
