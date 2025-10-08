

type IconBox = { children: React.ReactNode, title: string, direction: 'up' | 'down' }

const IconBox = (props: IconBox) => {
  const {children, title, direction} = props
  return (
    <>
        
        <div className="relative group cursor-pointer">
            <div className="duration-300 delay-500 group-hover:opacity-100 opacity-0 pointer-events-none absolute left-1/2 text-white -translate-x-1/2 bg-background-elevated-highlight px-3 py-1 rounded-[5px] shadow-[0px_14px_18px_0px_rgba(0,0,0,0.59)]" style={{top: direction=='down' ? '100%' : '', bottom: direction=='up' ? '100%' : ''}}><span>{title}</span></div>
            {children}
        </div>
    </>
  )
}

export default IconBox