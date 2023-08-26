import { ReactNode, useContext } from "react"
import { AuthContext } from "./AuthContext"
import Cookies from 'js-cookie';
import { useApi } from "../../hooks/useApi";

const api = useApi()

interface RequireAuthProps {
    children: ReactNode;
  }

export const RequireAuth =  ({children}:{children: JSX.Element})=>{
    const auth = useContext(AuthContext);

    const data = api.validadeToken() 
    if(!data){
    window.location.href='/login'
    }
    return <>
    {children}
    </>
    
}