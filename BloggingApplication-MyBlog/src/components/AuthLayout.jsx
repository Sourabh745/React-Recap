//only login user is allowed here
import React, { useEffect, useState } from 'react';
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

function Protected({children, authentication = true}) {

  const authStatus = useSelector((state) => state.auth.status) // return T/F of your status from stores

  const navigate = useNavigate();
  const [loader , setLoader] = useState(true);

  useEffect(() =>{
    // when you  are not logged in but want to see all posts
    if (authentication && authStatus !== authentication) {
      navigate("/login");
    }
    // when we already logged , you will be redirected to home pages
    else if(!authentication && authStatus !== authentication) {
      navigate("/")
    }
    setLoader(false);

  }, [authStatus, authentication, navigate])

  return loader ? null : <>{children}</>

  return (
    <>{children}</>
  );
}

export default Protected;
