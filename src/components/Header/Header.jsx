import React from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { useSelector } from "react-redux";
import {  Link, NavLink } from "react-router-dom";

function Header() {
  const authStatus = useSelector((state) => {
    return state.authSlice.status;
  });

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "My Posts",
      slug: "/my-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/create-post",
      active: authStatus,
    },
  ];
  return (
<header className="py-4 shadow-md bg-blue-900">
  <Container>
    <nav className="flex items-center">
      <div className="mr-6">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <ul className="flex ml-auto space-x-6">
        {navItems.map((item) =>
          item.active ? (
            <li
              key={item.name}
              className="flex justify-center items-center"
            >
              <NavLink
                to={item.slug}
                className="font-semibold text-lg text-white hover:text-blue-200 px-4 py-2 hover:bg-blue-700 rounded-md transition duration-300"
              >
                {item.name}
              </NavLink>
            </li>
          ) : null
        )}
        {authStatus && (
          <li className="flex justify-center items-center">
            <LogoutBtn className="text-white hover:text-blue-200 px-4 py-2 hover:bg-blue-700 rounded-md transition duration-300" />
          </li>
        )}
      </ul>
    </nav>
  </Container>
</header>


  );
}

export default Header;
