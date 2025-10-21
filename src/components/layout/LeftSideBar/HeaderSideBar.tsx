import Minimize from '../../../assets/svg/minimize.svg?react'
import IconBox from '../../ui/IconBox/IconBox'
import Plus from '../../../assets/svg/plus.svg?react'

export type HeaderSideBarProp = {
    hoverLeftSideBar: boolean
}

export const HeaderSideBar = (props: HeaderSideBarProp) => {

    const {hoverLeftSideBar} = props
    
  return (
    <>
        <div className="w-full flex items-center justify-between group px-4">
            <IconBox title='Collapse Your Library' direction='up' position='left'>    
                <div className="flex h-full items-center justify-start gap-1.5 cursor-pointer">
                    <div className='max-w-0 group-hover:max-w-[25px] transition-all duration-300'>
                        <Minimize className='-translate-x-6 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300' />
                    </div>
                    <span className='select-none font-bold text-white'>Your Library</span>
                </div>
            </IconBox>
            <div>
                <IconBox title='Create a playlist' direction='up' position='center'>
                    <button className='bg-background-elevated-base text-white hover:bg-background-elevated-highlight transition-all duration-300 rounded-full py-1.5 px-5 select-none cursor-pointer'>
                        <div className='flex gap-2 items-center justify-between'>
                            <Plus className='w-5 h-5' />
                            <span className='text-[.9rem] pt-[2px]'>Create</span>
                        </div>
                    </button>
                </IconBox>
            </div>
        </div>
    </>
  )
}
