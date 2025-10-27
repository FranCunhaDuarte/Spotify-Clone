import { useEffect, useState } from "react"
import { useToken } from "./useToken"
import type { AlbumItem, AlbumsRoot } from "../types/spotify/albums"


export const useNewRelease = () => {

    const {token, loading: tokenLoading, error: tokenError} = useToken()

    const LIMIT = 10

    const [data,setData] = useState<AlbumItem[] | null>(null)
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState<string | null>(null)

    useEffect(() => {
        if (!token || tokenLoading || tokenError) return 

        const fetchNewRelease = async () =>{
          try{
            const res = await fetch(`https://api.spotify.com/v1/browse/new-releases?limit=${LIMIT}`, {
              headers: {
                Authorization: `Bearer ${token}`
              }
            });

            if (!res.ok) {
              throw new Error(`Error fetching new releases: ${res.status}`)
            }

            const dataRes: AlbumsRoot = await res.json()

            setData(dataRes.albums.items)
            
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
