import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <ul className="flex space-x-5 justify-around font-bold text-4xl">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/about/info">Info</Link>
      </li>
      <li>
        <Link href="/login">Login</Link>
      </li>
      <li>
        <Link href="/register">Register</Link>
      </li>
    </ul>
  );
};

export default Navbar;
