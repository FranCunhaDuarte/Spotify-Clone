import { useContext, useEffect, useState } from "react"
import { TokenContext } from "../contexts/tokenContext"
import { MY_LIBRARY, type LibraryItem } from "../data/myLibrary"


export const useLibrary = () => {

  const {token,error: tokenError,loading: tokenLoading} = useContext(TokenContext)

  const [data,setData] = useState<LibraryItem[]>([])
  const [loading,setLoading] = useState(true)
  const [error,setError] = useState<string | null>(null)

  useEffect(()=>{
    if(!token || tokenLoading || !token) return

    const fetchLibrary = async () =>{
      try{
        const response: LibraryItem[] = MY_LIBRARY.map((item) => ({
          id: item.id,
          title: item.title,
          artist: item.artist,
          image: item.image,
          type: item.type,
        }))

        setData(response)

      }catch(err){
        if (err instanceof Error) {
          setError(err.message)
        } else {
          setError('Error desconocido')
        }
      }
      finally{
        setLoading(false)
      }
    }

    fetchLibrary()
  },[token,tokenError,tokenLoading])
  
  return (
    {data, loading, error}
  )
}
