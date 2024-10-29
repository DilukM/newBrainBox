/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";


const AuthContext = createContext();
const apiUrl = import.meta.env.VITE_API_URL;
import Cookies from 'js-cookie';

const useAuthContexts = () => {
    return useContext(AuthContext);
}

export const AuthContextProvider = ({ children }) => {



    const user_token = import.meta.env.VITE_USER_TOKEN;


    const [authuser, setAuthUser] = useState()
    const [loading, setLoading] = useState(true)
    const token = Cookies.get(user_token)

    useEffect(() => {
        const checkSession = async () => {
            const res = await fetch(
                `${apiUrl}auth`,
                {
                    method: "GET",
                    headers: {
                        Authorization: token
                    }

                }
            );
            const data = await res.json();
            setLoading(false)
            setAuthUser(data.user)
            console.log(data)
        }
        checkSession();

    }, [])


    return <AuthContext.Provider value={{ authuser, setAuthUser, loading }}>
        {children}
    </AuthContext.Provider>

}

export default useAuthContexts
