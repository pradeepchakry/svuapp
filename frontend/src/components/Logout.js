import React from 'react'
import { baseUrl } from './Login';

export default () => {
  const logout = () => {
    window.localStorage.clear();
    window.location.href = baseUrl + "login";
  }

  return (
    <button onClick={logout}>Logout</button>
  )
}