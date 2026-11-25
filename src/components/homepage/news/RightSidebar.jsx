'use client'
import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";

const RightSidebar = () => {
  const handleGoogleSignin = async () => {
  const { data, error } = await authClient.signIn.social({
    provider: "google",
    callbackURL: "/",
  });
  console.log({ data, error });
};

  return (
    <div>
      <h2 className="font-bold text-lg mb-4">Login with</h2>
      <div className="flex flex-col gap-2">
        <button
          className="btn border-blue-500 text-blue-500"
          onClick={handleGoogleSignin}
        >
          <FaGoogle />
          Login with google
        </button>
        <button className="btn">
          <FaGithub />
          Login with github
        </button>
      </div>
    </div>
  );
};

export default RightSidebar;