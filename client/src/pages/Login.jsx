import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../config/api";
import toast from "react-hot-toast";
import Loading from "../assets/infinite-spinner.svg";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { setUser, setIsLogin, setIsAdmin, setIsRecruiter } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;

    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("Form submitted: ", loginData);

    try {
      const res = await axios.post("/auth/login", loginData);
      toast.success(res.data.message);

      sessionStorage.setItem("user", JSON.stringify(res.data.data));
      setUser(res.data.data);
      setIsLogin(true);
      res.data.data.role == "Admin"
        ? (setIsAdmin(true), navigate("/admitDashboard"))
        : res.data.data.role == "User"
        ? navigate("/userDashboard")
        : (setIsRecruiter(true), navigate("/recruiterDashboard"));
    } catch (error) {
      toast.error(
        `Error ${error?.response?.status || "503"} : ${
          error?.response?.data?.message || "Service unavailable"
        }`
      );
    } finally {
      setLoading(false);
    }

    setLoginData({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Login
          </h2>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={loginData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="password">
                Password
              </label>
              <div className="relative flex items-center">
                <input
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="********"
                />
                <span
                  className="absolute right-1 border-s-2 border-gray-100 p-1 bg-white"
                  onClick={(e) =>
                    passwordVisible
                      ? setPasswordVisible(false)
                      : setPasswordVisible(true)
                  }
                >
                  {passwordVisible ? <LuEye /> : <LuEyeOff />}
                </span>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="rememMe"
                  className="h-4 w-4 accent-[#FF4081]"
                />
                <label htmlFor="rememMe" className="text-sm text-gray-500">
                  Remember Me
                </label>
              </div>

              <button
                className="text-[#FF4081] hover:underline font-semibold"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/changePassword");
                }}
              >
                Forgot Password?
              </button>
            </div>
            <button
              type="submit"
              className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition-colors font-semibold"
            >
              {loading ? (
                <div className="flex gap-3 justify-center items-center h-full">
                  <img src={Loading} alt="img" className="h-[1em]" />
                  <span>Logging in...</span>
                </div>
              ) : (
                "Login"
              )}
            </button>
          </form>
          <p className="mt-6 text-center text-gray-600 text-sm">
            Don't have an account?{" "}
            <Link to="/register" className="text-pink-500 hover:underline">
              Register now
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
