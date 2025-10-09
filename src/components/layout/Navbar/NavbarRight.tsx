import Bell from '../../../assets/svg/bell.svg?react'
import Friends from '../../../assets/svg/friends.svg?react'
import IconBox from '../../ui/IconBox/IconBox'
import { ProfileMenu } from '../../ui/ProfileMenu/ProfileMenu'

export const NavbarRight = () => {
  return (
    <>
        <div className="flex flex-row items-center justify-end overflow-visible pr-10">
            <IconBox title="What's New" direction='down'>
                <Bell className='h-full w-7 m-3' />
            </IconBox>
            <IconBox title="Friends Activity" direction='down'>
                <Friends className='h-full w-7 m-3' />
            </IconBox>
            <ProfileMenu />
        </div>
    </>
  )
}

