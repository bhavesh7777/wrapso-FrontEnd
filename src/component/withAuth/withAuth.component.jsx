import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

const withAuth = (WrappedComponent) => () => {
  const [loginStatus, setLoginStatus] = useState(
    localStorage.getItem('loginStatus'),
  )
  const history = useHistory()
  // acts as a event listner to anything that is passed in the dependency array
  useEffect(() => {
    if (loginStatus !== 'true') {
      history.push('/login')
    }
  }, [loginStatus])
  return <WrappedComponent />
}
export default withAuth
