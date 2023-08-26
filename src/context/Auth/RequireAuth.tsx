import { ReactNode, useContext } from "react"
import { AuthContext } from "./AuthContext"
import Cookies from 'js-cookie';
import { useApi } from "../../hooks/useApi";
import { useNavigate } from "react-router-dom";
import Login from "../../pages/Login";

const api = useApi()
interface RequireAuthProps {
    children: ReactNode;
  }
  
export const RequireAuth =  ({children}:{children: JSX.Element})=>{
  const navigate = useNavigate();
    const auth = useContext(AuthContext);
    if(!auth.user){
       return <Login/>
    }
    return children
    
    
}