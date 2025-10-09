

type IconBox = { children: React.ReactNode, title: string, direction: 'up' | 'down', position?: 'left' | 'right' | 'center' }

const IconBox = (props: IconBox) => {
  const {children, title, direction, position = 'center' } = props
  return (
    <>
        
        <div className="relative group cursor-pointer hover-enter-only">
            <div className="title opacity-0 pointer-events-none absolute text-white bg-background-elevated-highlight px-3 py-1 rounded-[5px] shadow-[0_16px_24px_rgba(0,_0,_0,_.3),_0_6px_8px_rgba(0,_0,_0,_.2)]" style={{top: direction=='down' ? 'calc(100% + 5px)' : undefined, bottom: direction=='up' ? 'calc(100% + 5px)' : undefined, left: position === 'center' ? '50%' : ( position === 'left' ? '0' : undefined), right: position === 'right' ? '0' : '', transform: position === 'center' ? 'translateX(-50%)' : undefined}}><span className="text-nowrap">{title}</span></div>
            {children}
        </div>
    </>
  )
}

export default IconBox