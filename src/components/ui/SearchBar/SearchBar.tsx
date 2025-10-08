import IconBox from '../IconBox/IconBox'
import Search from '../../../assets/svg/search.svg?react'
import Browse from '../../../assets/svg/browse.svg?react'

type SearchProps = { placeholder: string }

export const SearchBar = (props: SearchProps) => {
  const {placeholder} = props
  return (
    <>
        <div className='h-full'>
            <div className="bg-background-elevated-base flex items-center justify-center h-full rounded-full">
                <IconBox title='Search' direction='down'>
                  <Search className='h-7 w-7 m-4' />
                </IconBox>
                <input id='search-explorer' className='outline-0 w-[400px] text-[1.1rem] text-white placeholder:text-text-subdued' type="text" placeholder={placeholder} />
                <IconBox title='Browse' direction='down'>
                  <Browse className='h-7 w-7 m-4' />
                </IconBox>
            </div>
        </div>
    </>
  )
}
