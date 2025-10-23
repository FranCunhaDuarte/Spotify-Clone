
type CenterContentProps = {
    children: React.ReactElement | null
}

export const CenterContent = (props: CenterContentProps) => {

    const {children} = props

  return (
    <>
        {children}
    </>
  )
}
