import { useEffect, useState } from "react"


export type Token ={
    token: string | null
    loading: boolean
    error: string | null
}

export const useToken = (): Token => {

    const [token,setToken] = useState<string | null>(null)
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState<string | null>(null)

    useEffect(() =>{

        const fetchToken = async () =>{
            try{
                const res = await fetch('http://localhost:3001/api/token');
                
                if (!res.ok) throw new Error('Error getting token')
                const data = await res.json()

                setToken(data["access_token"])

            }catch(error){
                if (error instanceof Error){
                    setError(error.message)
                }
            }finally{
                setLoading(false)
            }
        }

        fetchToken()
    },[])

    return { token, loading, error }
}