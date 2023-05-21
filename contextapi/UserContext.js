import React, {createContext, useState, useEffect} from "react";
import { makeGetRequest } from "@/pages/api/auth";
import { url } from "@/pages/api/url";


export const UserContext = createContext({})

export const UserContextProvider = ({children}) => {
    const [userInfo, setUserInfo] = useState( null);
    const [isAuth, setIsAuth] = useState(false);
    const [tokens, setTokens] = useState(null)

    useEffect(()=>{
        setUserInfo(()=>localStorage.getItem('user') ? JSON.parse(localStorage.getItem("user")): null)
        setTokens(()=>localStorage.getItem('token') ? JSON.parse(localStorage.getItem("token")): null)
        setIsAuth(()=>localStorage.getItem('authenticated') ? JSON.parse(localStorage.getItem("authenticated")): false)
    }, [])

    async function init_login(){
        makeGetRequest(`${url}/auth`).then((res)=>{
            window.location.assign(res.url)
            // window.location.href = res.url
        }).then(()=>console.log(window.location, "window"))
    }

    async function login(id){
        console.log(url, "URL----------")
        makeGetRequest(`${url}/auth/login?user_id=${id}`).then((res)=>{
            if (res.user_info.email !== localStorage.getItem("email")){
                localStorage.setItem("user", JSON.stringify(res.user_info))
                setUserInfo(res.user_info)
            }
            localStorage.setItem("token", JSON.stringify(res.token))
            setTokens(res.token)
            localStorage.setItem("authenticated", "true")
            setIsAuth("true")
    })
    }

    async function logout(){        
        const user_id = JSON.parse(localStorage.getItem("user")).id
        makeGetRequest(`${url}/auth/logout?user_id=${user_id}`).then(
            ()=>localStorage.clear()
        );
        setTokens(null)
        setIsAuth(false)
        setUserInfo(null)
    }

    const value = {
        userInfo,
        isAuth,
        tokens,
        login,
        logout,
        setIsAuth,
        setUserInfo,
        setTokens,
        init_login
    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;
