import { createContext } from "react";
import type { Token } from "../hooks/useToken";



export const TokenContext = createContext<Token>({
    token: null,
    loading: false,
    error: null
})

