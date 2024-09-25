import React, { useState } from "react";
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

  React.useEffect(() => {
    // Function to check the token and set the user state
    const checkToken = () => {
      if (token) {
        setUser(true);
      } else {
        setUser(false);
      }
    };

    // Check the token initially on mount
    checkToken();

    // Add event listener to handle changes in local storage
    const handleStorageChange = () => {
      setToken(localStorage.getItem("token"));
    };

    window.addEventListener("storage", handleStorageChange);

    // Clean up the event listener on unmount
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
