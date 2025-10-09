import IconBox from '../IconBox/IconBox'
import Search from '../../../assets/svg/search.svg?react'
import Browse from '../../../assets/svg/browse.svg?react'
import BrowseActive from '../../../assets/svg/browseActive.svg?react'
import X from '../../../assets/svg/x.svg?react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useRouteCheck } from '../../../hooks/useRouteCheck'


type SearchProps = { placeholder: string }

export const SearchBar = (props: SearchProps) => {
  const {placeholder} = props;

  const {isSearch} = useRouteCheck()
  
  const [hover,setHover] = useState(false)

  // INPUT VALUE
  const [searchValue,setSearchValue] = useState('');

  // CLEAR INPUT
  const handleClearInput = () => {
    setSearchValue('')
  };

  // ON CHANGE
  const handleOnChangeInput = (value: string) =>{
    setSearchValue(value)
  } 

  return (
    <>
        <form className='h-full' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <div className="flex items-center justify-center h-12 rounded-full transition-all ease-in-out duration-300 border border-transparent" style={{backgroundColor: hover ? 'var(--color-background-elevated-highlight)' : 'var(--color-background-elevated-base)', borderColor: hover ? 'var(--color-border-highlight)' : ''}}>
                <button>
                  <IconBox title='Search' direction='down'>
                    <Search className='h-full w-7 m-3' />
                  </IconBox>
                </button>
                <div className='relative'>
                  <input id='search-explorer' onChange={(e) => handleOnChangeInput(e.target.value)} value={searchValue} className='pr-12 outline-0 w-[400px] text-[1.1rem] text-white placeholder:text-text-subdued' type="text" placeholder={placeholder} />
                  {searchValue && (<button onClick={() => handleClearInput()} className='absolute right-0 mx-2 cursor-pointer'>
                    <span><X className='w-7 h-7' /></span>
                  </button>)}
                </div>
                <div className='w-[1px] h-[50%] bg-background-tinted-press'></div>
                <button>
                  <Link to='/search'>
                    <IconBox title='Browse' direction='down'>
                      {isSearch ? <BrowseActive className='h-full w-7 m-4' /> : <Browse className='h-full w-7 m-4' />}
                    </IconBox>
                  </Link>
                </button>
            </div>
        </form>
    </>
  )
}
