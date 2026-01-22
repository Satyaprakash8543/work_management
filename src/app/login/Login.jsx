"use client";
import React, { useContext, useState } from "react";
import UserContext from "../../context/userContext";
import { toast } from "react-toastify";
import {login } from "../../services/userServices"
import { useRouter } from "next/navigation";


const Login = () => {
  const router=useRouter();
  const context = useContext(UserContext);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const loginFormSubmitted = async (event) => {
    event.preventDefault();
    //  console.log(event);
    console.log(loginData);
    if (loginData.email.trim() === "" || loginData.password.trim() === "") {
      toast.info("Invalid data!!", {
        position: "top-center",
      });
      return;
    }

    // Validate data
    //login (api)

    try {
      const result = await login(loginData)
      console.log(result);
      toast.success("Logged In");
      //After login redirect page
      context.setUser(result.user); 
      router.push("/profile/user")

    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message, {
        position: "top-center",
      });
    }
  };
  return (
    <div className="container grid grid-cols-12 ">
      <div className="col-span-5 col-start-5  p-4">
        <div className="py-2"></div>

        <h1 className="text-2xl text-center hover:text-teal-500">Login Here</h1>
        <form action="#!" onSubmit={loginFormSubmitted}>
          {/* email */}
          <div className="mt-2">
            <label
              className="block text-xl font-medium mb-2 ps-3"
              htmlFor="user_email"
            >
              Email
            </label>
            <input
              type="email"
              className="w-full p-2.5 rounded-2xl bg-gray-600 focus:ring-gray-100 border border-gray-500"
              placeholder="Enter email"
              id="user_email"
              name="user_email"
              onChange={(event) => {
                setLoginData({
                  ...loginData,
                  email: event.target.value,
                });
              }}
              value={loginData.email}
            />
          </div>

          {/* password */}
          <div className="mt-2">
            <label
              className="block text-xl font-medium mb-2 ps-3"
              htmlFor="user_password"
            >
              Password
            </label>
            <input
              type="password"
              className="w-full p-2.5 rounded-2xl bg-gray-600 focus:ring-gray-100 border border-gray-500"
              placeholder="Enter password"
              id="user_password"
              name="user_password"
              onChange={(event) => {
                setLoginData({
                  ...loginData,
                  password: event.target.value,
                });
              }}
              value={loginData.password}
            />
          </div>

          {/* Button field  */}
          <div className="mt-2 text-center">
            <button
              type="submit"
              className="px-3 py-2 bg-green-600 rounded-xl hover:bg-green-400"
            >
              Login
            </button>
            <button
              type="button"
              className="px-3 py-2 bg-orange-600 rounded-xl hover:bg-orange-400 mx-2"
            >
              Reset
            </button>
          </div>

          {/* check the change value is verify */}
          {/* {JSON.stringify(loginData)} */}
        </form>
      </div>
    </div>
  );
};

export default Login;
