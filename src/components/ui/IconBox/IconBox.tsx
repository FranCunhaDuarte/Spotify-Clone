

type IconBox = { children: React.ReactNode, title: string, direction: 'up' | 'down' }

const IconBox = (props: IconBox) => {
  const {children, title, direction} = props
  return (
    <>
        
        <div className="relative group cursor-pointer hover-enter-only">
            <div className="title opacity-0 pointer-events-none absolute left-1/2 text-white -translate-x-1/2 bg-background-elevated-highlight px-3 py-1 rounded-[5px] shadow-[0_16px_24px_rgba(0,_0,_0,_.3),_0_6px_8px_rgba(0,_0,_0,_.2)]" style={{top: direction=='down' ? 'calc(100% + 5px)' : '', bottom: direction=='up' ? 'calc(100% + 5px)' : ''}}><span className="text-nowrap">{title}</span></div>
            {children}
        </div>
    </>
  )
}

export default IconBox