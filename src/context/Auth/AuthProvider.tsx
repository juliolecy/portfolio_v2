import { useEffect, useState } from "react"
import { AuthContextType, User } from "../../types/types"
import Cookies from 'js-cookie';
import { useApi } from "../../hooks/useApi";
import { FaLastfmSquare } from "react-icons/fa";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({children}:{children:JSX.Element}) =>{
    
    const api = useApi()
    const [user, setUser] = useState<User | null>(null)
    const [token, setToken] = useState<User | null>(null)

    // useEffect(()=>{
    //     const validateToken = async ()=>{
    //         const data = await api.validadeToken()
    //         return data
    //     }
    //     validateToken()
    // },[])

    useEffect(()=>{
console.log(user, token)
    },[user, token])
    const signin = async(email:string, password:string) =>{
        const data = await api.signin(email, password);
        console.log('authprovider signin', data)
        if(data.user && data.token){
            setUser(data.user)
            setToken(data.token)
            return true
        }
        return false
    }

    const signout = async() =>{
        await api.logout();
        setUser(null);
    }

    return(
    <AuthContext.Provider value={{user, signin, signout}}>
            {children}
        </AuthContext.Provider>
    )
}