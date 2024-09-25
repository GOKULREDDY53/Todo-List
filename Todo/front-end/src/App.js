import React, { useState, useEffect } from "react";
import TopNavbar from "./components/LandingPage/navbar";
import ToDoNavbar from "./components/LandingPage/todoNavbar";
import Footer from "./components/LandingPage/footer";
import Home from "./components/LandingPage/home";
import Features from "./components/LandingPage/features";
import Services from "./components/LandingPage/services";
import ToDoApp from "./ToDoApp";

function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    const checkToken = () => {
      const storedToken = localStorage.getItem("token");
      console.log("Stored token:", storedToken); // Debugging log
      if (storedToken) {
        setUser(true);
      } else {
        setUser(false);
      }
    };

    checkToken();

    const handleStorageChange = () => {
      setToken(localStorage.getItem("token"));
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [token]);

  return (
    <>
      {user ? (
        <>
          <ToDoNavbar />
          <ToDoApp />
        </>
      ) : (
        <>
          <TopNavbar />
          <Home />
          <Features />
          <Services />
        </>
      )}

      <Footer />
    </>
  );
}

export default App;
