"use client";
import React, { useState } from "react";
import Image from "next/image";
import signupsvg from "@/app/assets/signupsvg.svg";
import { toast } from "react-toastify";
import { signUp } from "../../services/userServices";

const Signuppage = () => {
  // key is same as api as name,email...
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
    profileURL:
      "https://www.freepik.com/free-vector/user-circles-set_145856997.htm#fromView=keyword&page=1&position=1&uuid=bae12d88-5850-4c6a-bad6-aa584c2d4dea&query=Default+profile",
  });

  const doSignup = async (event:any) => {
    event.preventDefault();
    //    console.log(event);
    console.log(data); //form submit hone per data print on console(Browser)
    if (data.name.trim() === "" || data.name == null) {
      toast.warning("Name is required !!", {
        position: "top-right",
      });
      return;
    }

    try {
      const result = await signUp(data);
      console.log(result);
      toast.success("User is registered !!", { position: "top-center" });

      setData({
        name: "",
        email: "",
        password: "",
        about: "",
        profileURL: "",
      });
    } catch (error:any) {
      console.log(error);
      console.log(error.response.data.message);
      toast.error("Signup Error !! " + error.response.data.message, {
        position: "top-center",
      });
    }
  };

  const resetForm = () => {
    setData({
      name: "",
      email: "",
      password: "",
      about: "",
      profileURL: "",
    });
  };

  return (
    <div className="container grid grid-cols-12 ">
      <div className="col-span-5 col-start-5  p-4">
        <div>
          <div className="flex justify-center">
            <Image src={signupsvg} alt="signup" width={150} height={150} />
          </div>
          <h1 className="text-2xl text-center hover:text-teal-500">
            Singup Here
          </h1>
          <form action="#!" className="mt-2" onSubmit={doSignup}>
            {/* name  */}
            <div className="mt-2">
              <label
                className="block text-xl font-medium mb-2 ps-3"
                htmlFor="user_name"
              >
                Username
              </label>
              <input
                type="text"
                className="w-full p-2.5 rounded-2xl bg-gray-600 focus:ring-gray-100 border border-gray-500"
                placeholder="Enter username"
                id="user"
                name="user_name"
                onChange={(event) => {
                  setData({
                    ...data,
                    name: event.target.value,
                  });
                }}
                value={data.name}
              />
            </div>

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
                  setData({
                    ...data,
                    email: event.target.value,
                  });
                }}
                value={data.email}
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
                  setData({
                    ...data,
                    password: event.target.value,
                  });
                }}
                value={data.password}
              />
            </div>
            {/* about section */}
            <div className="mt-2">
              <label
                className="block text-xl font-medium mb-2 ps-3"
                htmlFor="user_about"
              >
                About
              </label>
              <textarea
                className="w-full p-2.5 rounded-xl bg-gray-600 focus:ring-gray-100 border border-gray-500"
                placeholder="Enter here"
                id="user_about"
                rows={5}
                name="user_about"
                onChange={(event) => {
                  setData({
                    ...data,
                    about: event.target.value,
                  });
                }}
                value={data.about}
              >
                Enter here
              </textarea>
            </div>

            <div className="mt-2 text-center">
              <button
                type="submit"
                className="px-3 py-2 bg-green-600 rounded-xl hover:bg-green-400"
              >
                Signup
              </button>
              <button onClick={resetForm} type="button" className="px-3 py-2 bg-orange-600 rounded-xl hover:bg-orange-400 mx-2">
                Reset
              </button>
            </div>

            {/* check the change value is verify */}
            {/* stringify is use to convert string */}
            {/* {JSON.stringify(data)} */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signuppage;
