import React, { useState } from "react";
// import Link from "next/link";
import { Input } from "antd";
import { Link } from "react-router-dom";

export default function SIgnInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!email || !password) {
      setError(true);
      return;
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="sign-in-form">
        <div className="email-input">
          <div className="mb-5">
            <Input
              className="w-full h-[45px] border px-5"
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              // placeholder="Email"
              required
              type="email"
              pattern="^\S+@\S+\.\S+$"
            />
          </div>
        </div>
        {error && email.length <= 0 ? (
          <label> This field is required</label>
        ) : (
          ""
        )}

        <div className="password-input">
          <div className="mb-5">
            <input
              className="w-full h-[45px] border px-5"
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              // placeholder="Password"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
              required
            />
          </div>
        </div>
        {error && password.length <= 0 ? (
          <label>Password input can not be empty</label>
        ) : (
          ""
        )}

        <div>
          <button className="uppercase text-[white] bg-[#032282] h-[45px] my-5 w-full">
            {/* <a href="/dashboard" className="login-link">
              log in
            </a> */}
            <Link className="" to={"/dashboard"}>
              log in
            </Link>
          </button>
        </div>
      </form>
    </>
  );
}
