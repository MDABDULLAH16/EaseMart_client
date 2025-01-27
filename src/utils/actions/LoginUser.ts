"use server";
import { FormValues } from "@/app/login/page";

const LoginUser = async (data: FormValues) => {
  const res = await fetch(`${process.env.BACKEND_URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });
  const userInfo = await res.json();
  return userInfo;
};

export default LoginUser;
