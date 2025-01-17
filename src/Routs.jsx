import React , {useEffect} from 'react'
import { useNavigate , useRoutes } from 'react-router-dom'

//page list 
import Dashboard from './components/dashboard/Dashboard'
import Signup from './components/auth/Signup'
import Login from './components/auth/Login'
import Profile from './components/user/Profile'

// auth context

import { useAuth } from './authContext'
import { useEffect } from 'react'

const ProjectRoute = ()=>{
    const {currUser , setCurrUser} = useAuth()
    const navigate = useNavigate()

    useEffect(()=>{
        const userIdFromStorage = localStorage.getItem("userId")

        if (userIdFromStorage && !currUser){
            setCurrUser(userIdFromStorage)
        }

        if(!userIdFromStorage && !["/auth" , "/signup"].includes(window.location.pathname)){
            navigate("/auth")
        }

        if(userIdFromStorage && window.location.pathname == "/auth"){
            navigate("/")
        }
    } , [currUser , navigate , setCurrUser])

    let element = useRoutes([
        {
            path:"/",
            element:<Dashboard />
        }
        {
            path:"/auth",
            element:<Login />
        }
        {
            path:"/signup",
            element:<Signup />
        }
        {
            path:"/profile",
            element:<Profile />
        }
    ])

    return element
}

export default ProjectRoute