import { useEffect, useState } from "react"
import { MY_LIBRARY } from "../data/myLibrary"
import type { Artist, ArtistsRoot } from "../types/spotify/artists"
import { useToken } from "./useToken"

export const useMyArtists = () => {

    const {token, loading: tokenLoading, error: tokenError} = useToken()

    const [data,setData] = useState<Artist[] | null>(null)
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchNewRelease = async () =>{
            try{
                
                const myArtists: string[] = MY_LIBRARY
                    .filter(item => item.type === 'artist')
                    .map(artist => artist.id)

                const idsParams = myArtists.join(',')
                const URL = `https://api.spotify.com/v1/artists?ids=${idsParams}`

                const res = await fetch(URL, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                
                if (!res.ok) {
                    throw new Error(`Error fetching new releases: ${res.status}`)
                }
                
                const dataRes: ArtistsRoot = await res.json()
                
                console.log(dataRes.artists)
                
                setData(dataRes.artists)
            
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


  return (
    {data, loading, error}
  )
}
