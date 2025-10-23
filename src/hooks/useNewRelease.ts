import { useEffect, useState } from "react"
import type { Albums, Root } from "../types/fetchTypes"
import { useToken } from "./useToken"


export const useNewRelease = () => {

    const {token, loading: tokenLoading, error: tokenError} = useToken()


    const [data,setData] = useState<Albums | null>(null)
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState<string | null>(null)

    useEffect(() => {
        if (!token || tokenLoading || tokenError) return 

        const fetchNewRelease = async () =>{
          try{
            const res = await fetch('https://api.spotify.com/v1/browse/new-releases', {
              headers: {
                Authorization: `Bearer ${token}`
              }
            });

            if (!res.ok) {
              throw new Error(`Error fetching new releases: ${res.status}`)
            }

            const dataRes: Root = await res.json()

            setData(dataRes.albums)
            
          }catch(err){
            if (err instanceof Error) {
              setError(err.message)
            } else {
              setError('Error desconocido')
            }
          }finally{
            setLoading(false)
          }
        }

        fetchNewRelease()
    },[token, tokenLoading, tokenError])

  return  {data, loading, error}
}
