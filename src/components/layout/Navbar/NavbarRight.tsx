import Bell from '../../../assets/svg/bell.svg?react'
import Friends from '../../../assets/svg/friends.svg?react'
import IconBox from '../../ui/IconBox/IconBox'
import { ProfileMenu } from '../../ui/ProfileMenu/ProfileMenu'

export const NavbarRight = () => {
  return (
    <>
        <div className="flex flex-row gap-2 items-center justify-end overflow-visible">
            <IconBox title="What's New" direction='down' position='center'>
                <Bell className='h-full w-6 m-3' />
            </IconBox>
            <IconBox title="Friends Activity" direction='down' position='center'>
                <Friends className='h-full w-6 m-3' />
            </IconBox>
            <ProfileMenu />
        </div>
    </>
  )
}

