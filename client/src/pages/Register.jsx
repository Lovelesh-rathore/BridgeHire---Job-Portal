import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../config/api";
import toast from "react-hot-toast";
import Loading from "../assets/infinite-spinner.svg";

const role = [
  { value: "User", display: "Searching for job" },
  { value: "Recruiter", display: "Recruiter" },
];

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;

    setRegisterData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    let isValid = true;
    const errors = {};

    if (
      !/^[a-zA-Z]+$/.test(registerData.firstName) ||
      registerData.firstName < 2 ||
      (registerData.lastName && !/^[a-zA-Z]+$/.test(registerData.lastName))
    ) {
      errors.name =
        "Please enter a valid name (only letters, at least 3 characters)";
      isValid = false;
    }

    if (!/^[a-zA-Z0-9._]+@gmail.com$/.test(registerData.email)) {
      errors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (
      !/^[6-9]\d{9}$/.test(registerData.phone) ||
      registerData.phone.length !== 10
    ) {
      errors.phone = "Please enter a valid phone number (10 digits)";
      isValid = false;
    }

    if (!registerData.role) {
      errors.role = "Please select a role)";
      isValid = false;
    }

    if (
      !registerData.password ||
      registerData.password.length < 6 ||
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*?.,_]).{6,20}$/.test(
        registerData.password
      )
    ) {
      errors.password =
        "Password must be at least 6 characters long and contains uppercase letter, lowercase letter, number and special Character";
      isValid = false;
    }

    if (registerData.password != registerData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setError(errors);
    if (!isValid) {
      toast.error("Please fix the errors before submitting");
    }
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    if (!validate()) {
      setLoading(false);
      return;
    }
    console.log("registered Data: ", registerData);

    try {
      const res = await axios.post("/auth/register", registerData);
      toast.success(res.data.message);
      navigate("/login");
    } catch (error) {
      toast.error(
        `Error ${error?.response?.status || "503"} : ${
          error?.response?.data?.message || "Server unavailable"
        }`
      );
    } finally {
      setLoading(false);
    }

    setRegisterData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      role: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
        <form
          className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-lg border border-gray-200 my-10"
          onSubmit={handleSubmit}
        >
          <h2 className="text-3xl font-extrabold mb-8 text-center text-pink-500 tracking-wide">
            Create Your Account
          </h2>
          <div className="grid -gap-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  className="block text-gray-700 mb-2 font-medium"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={registerData.firstName || ""}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 mb-2 font-medium"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  value={registerData.lastName || ""}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            {error.name && (
              <div className="text-red-500 text-sm w-full ">{error.name}</div>
            )}
          </div>

          <div className="grid -gap-2">
            <div className="mb-6">
              <label
                className="block text-gray-700 mb-2 font-medium"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={registerData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                placeholder="Enter your email"
              />
            </div>
            {error.email && (
              <div className="text-red-500 text-sm ">{error.email}</div>
            )}
          </div>

          <div className="grid -gap-2">
            <div className="mb-6">
              <label
                className="block text-gray-700 mb-2 font-medium"
                htmlFor="phone"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={registerData.phone || ""}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                placeholder="Enter your phone number"
              />
            </div>
            {error.phone && (
              <div className="text-red-500 text-sm ">{error.phone}</div>
            )}
          </div>

          <div className="grid -gap-2">
            <div className="mb-6">
              <label
                className="block text-gray-700 mb-2 font-medium"
                htmlFor="role"
              >
                I am:
              </label>
              <select
                name="role"
                id=""
                value={registerData.role}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
              >
                <option value="">Select Role</option>
                {role.length ? (
                  role.map((opt, index) => (
                    <option value={opt.value} key={index}>
                      {opt.display}
                    </option>
                  ))
                ) : (
                  <option value="">--No role Found--</option>
                )}
              </select>
            </div>
            {error.role && (
              <div className="text-red-500 text-sm ">{error.role}</div>
            )}
          </div>

          <div className="grid -gap-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label
                  className="block text-gray-700 mb-2 font-medium"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  value={registerData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                  placeholder="Enter your password"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 mb-2 font-medium"
                  htmlFor="confirmPassword"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  required
                  value={registerData.confirmPassword || ""}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                  placeholder="Re-enter your password"
                />
              </div>
            </div>
            {error.password && (
              <div className="text-red-500 text-sm ">{error.password}</div>
            )}
            {error.confirmPassword && (
              <div className="text-red-500 text-sm ">
                {error.confirmPassword}
              </div>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-lg font-semibold text-lg shadow-md hover:from-blue-700 hover:to-purple-700 transition"
          >
            {loading ? (
              <div className=" flex justify-center items-center gap-3 h-full">
                <img src={Loading} alt="" className="h-[1em]" />
                <span>Creating Account..</span>
              </div>
            ) : (
              "Create Account"
            )}
          </button>
          <p className="mt-6 text-center text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-pink-500 hover:underline font-medium"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Register;
