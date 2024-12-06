import React from 'react';
import {useDispatch} from "react-redux"
import authService from "../../appwrite/auth.js"
import {logout} from "../../stores/authSlice.js"

function LogoutBtn() {
    const dispatch  = useDispatch()

    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout());
        })
    }
  return (
    <button
    className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={logoutHandler}
    >
        Logout
    </button>
  );
}

export default LogoutBtn;

// In the LogoutBtn component:

// authService.logout() is called to ensure the session is terminated on the server.
// After successfully logging out on the server, the logout action is dispatched to Redux to update the local state.