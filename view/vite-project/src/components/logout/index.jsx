import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate()
  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:3000/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if(response.ok) {
        navigate('/sign-in')
        sessionStorage.removeItem('user')
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  )
}
