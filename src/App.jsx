import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Header } from "./components/index";
import { Outlet } from "react-router-dom";
import user from "./appwrite/authServices";
import { login, logout } from "./redux/features/authSlice";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      user
        .getAccount()
        .then((userData) => {
          if (userData) {
            dispatch(login({ userData }));
          } else {
            dispatch(logout());
          }
        })
        .finally(() => setLoading(false));
    } catch (error) {}
  }, []);

  return !loading ? (
    <main className="min-h-screen max-h-fit flex flex-col ">
      <Header />
      <Outlet />
    </main>
  ) : null;
}

export default App;
