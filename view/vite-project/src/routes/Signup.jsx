import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Signup() {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const navigate = useNavigate()

    const handleChangeName = (e) => {
      setName(e.target.value)
    }

    const handleChangeEmail = (e) => {
      setEmail(e.target.value)
    }

    const handleChangePassword = (e) => {
      setPassword(e.target.value)
    }

    const handleSubmit = async (e) => {
      e.preventDefault()

      try {
        const response = await fetch('http://localhost:3000/sign-up', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password }),
        })

        const data = await response.json()
        if (response.ok) {
          sessionStorage.setItem("user", JSON.stringify(data));
          navigate("/profile");
        }
      } catch (err) {
          console.log(err)
      }
    }

  return(
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" placeholder="Your fullname" required onChange={handleChangeName}/>
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" placeholder="example@email.com" required  onChange={handleChangeEmail}/>
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" required onChange={handleChangePassword}/>
      </div>

      <button type="submit">Enviar</button>
    </form>
  )
}