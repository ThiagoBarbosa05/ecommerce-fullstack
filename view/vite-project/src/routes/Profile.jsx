import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Logout from "../components/logout"

export default function ProfilePage() {

  const user = JSON.parse(sessionStorage.getItem('user')) 
  const navigate = useNavigate() 

  if(user) {
    return (
      <div>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <Logout />
      </div>
    )
  } else {
    return (
      <div>
        <h3>Voce nao esta logado</h3>
        <Link to='/sign-in'>Login</Link>
      </div>
    )
  }
}