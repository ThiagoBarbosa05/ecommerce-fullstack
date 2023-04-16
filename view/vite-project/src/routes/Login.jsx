import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import userImg from "../assets/Vector.svg";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (response.ok) {
        sessionStorage.setItem("user", JSON.stringify(data));
        navigate("/profile");
      }
    } catch (err) {
      console.log(err);
      setError("Username and password does not exist.");
    }
  };
  return (
    <div>
      {error && <div className="w-[90%] max-w-[21.87rem] mx-auto bg-[#E90202] mt-[3rem] py-[.55rem] rounded-md text-white text-center"><p>{error}</p></div>}
      <div className="border-[1px] w-[90%] max-w-[21.87rem] mx-auto mt-[1rem] rounded-md shadow">
        <div className="border-b-[1px] flex justify-center py-[2rem]">
          <img src={userImg} alt="profile img" className="w-[5rem]" />
        </div>

        <form onSubmit={handleSubmit} className="p-5">
          <div className="pb-[1.45rem] flex flex-col">
            <label className="pb-[.34rem] font-medium">Email:</label>
            <input
              className="border-[1px] border-[#0D6EFD] outline-none placeholder:text-sm py-[.34rem] px-[.24rem] rounded-md"
              type="email"
              name="email"
              placeholder="example@email.com"
              required
              onChange={handleEmailChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="pb-[.34rem] font-medium">Password:</label>
            <input
              className="border-[1px] border-[#0D6EFD] outline-none py-[.34rem] px-[.24rem] rounded-md"
              type="password"
              name="password"
              placeholder="your password..."
              required
              onChange={handlePasswordChange}
            />
          </div>
          <button className="bg-gradient-to-b from-[#127FFF] to-[#0D6EFD] w-[100%] mt-[1.45rem] py-[.84rem] text-white rounded-md">
            Sign in
          </button>
          <p className="text-sm text-[#353638] pt-[.24rem]">
            New to techshop?{" "}
            <Link to="/sign-up" className="text-[#0D6EFD]">
              Sign up now
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
