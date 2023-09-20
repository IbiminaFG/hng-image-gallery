import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="login-container">
      <div className="border-solid border-2 border-black p-6 w-md">
        <form
          className="flex flex-col gap-6 justify-center items-center"
          onSubmit={handleSubmit}
        >
          <h1 className="text-xl font-bold">Login</h1>
          {error && <p className="text-white bg-red-300 p-2">{error}</p>}
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@gmail.com"
            className="border-solid border-2 border-gray-500 rounded-md w-full p-1"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            className="border-solid border-2 border-gray-500 rounded-md w-full p-1"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="border-solid border-2 bg-blue-500 rounded-md w-full p-1 text-white"
          >
            Log In
          </button>
          <hr />
          <p>
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-500">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
