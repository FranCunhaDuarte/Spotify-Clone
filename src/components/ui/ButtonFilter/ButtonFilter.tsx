

type ButtonFilter = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    title: string
}

export const ButtonFilter: React.FC<ButtonFilter> = (props: ButtonFilter) => {
    const { title, ...buttonProps } = props

  return (
    <>
        <button {...buttonProps} className='bg-background-elevated-base text-white hover:bg-background-elevated-highlight transition-all duration-300 rounded-full py-1 px-4 pb-2 select-none cursor-pointer'>
            <span className='text-[.9rem]'>{title}</span>
        </button>
    </>
  )
}
