"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/EaseMart.png";
import { signOut } from "next-auth/react";
import {
  clearUserInfo,
  selectUserInfo,
} from "@/redux/features/userDetailsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

type UserProps = {
  user?: {
    name?: string | undefined | null;
    email?: string | undefined | null;
    image?: string | undefined | null;
  };
};

const Navbar = ({ session }: { session: UserProps | null }) => {
  console.log(session?.user?.name);
  const user = useSelector(selectUserInfo);
  const dispatch = useDispatch();
  const router = useRouter();
  console.log(user);
  const handleLogOut = async () => {
    await signOut({ redirect: false, callbackUrl: "/login" }); // Add NextAuth signout options
    dispatch(clearUserInfo());

    router.push("/login");
    router.refresh(); // Force refresh to clear any cached state
  };
  return (
    <div className="navbar bg-base-100  border-b  w-[90%] mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/product">Products</Link>
            </li>
            <li>
              <Link href="/cart">Cart</Link>
            </li>

            <li>
              <Link href="/about">About Us</Link>
            </li>
            {/* <li>
              <Link href="/support">Support</Link>
            </li> */}
            {user?.role === "admin" ? (
              <li>
                <Link href="/admin">Admin Panel</Link>
              </li>
            ) : (
              <li>
                <Link href="/dashboard">Dashboard</Link>
              </li>
            )}
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl">
          <Image src={logo} alt="EaseMart" width={80} height={80} />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/product">Products</Link>
          </li>
          <li>
            <Link href="/cart">Cart</Link>
          </li>

          <li>
            <Link href="/about">About Us</Link>
          </li>
          {/* <li>
            <Link href="/support">Support</Link>
          </li> */}
          {user?.role === "admin" ? (
            <li>
              <Link href="/admin">Admin Panel</Link>
            </li>
          ) : (
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
          )}
        </ul>
        <div>
          <h1>{user?.name}</h1>
        </div>
      </div>
      <div className="navbar-end">
        {session?.user || user ? (
          <button
            onClick={handleLogOut}
            className="btn btn-error btn-outline text-white rounded-full px-5"
          >
            Logout
          </button>
        ) : (
          <Link
            href="/login"
            className="btn btn-accent btn-outline text-white rounded-full px-5"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
