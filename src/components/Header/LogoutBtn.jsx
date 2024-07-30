import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/features/authSlice";
import user from "../../appwrite/authServices";
import { Link } from "react-router-dom";

function LogoutBtn() {
  const dispatch = useDispatch();
  const handleLogout = async () => {
    await user.logout();
    dispatch(logout());
  };
  return (
    <Link
      onClick={handleLogout}
      to={"/"}
      className=" font-semibold text-lg px-6  bg-blue-400 border-gray-400 rounded-xl hover:underline"
    >
      Logout
    </Link>
  );
}

export default LogoutBtn;
