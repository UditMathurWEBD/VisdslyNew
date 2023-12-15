import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  const [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? localStorage.getItem("authTokens")
      : null
  );
  const [loading, setLoading] = useState(true);

  const loginUser = async (email, password) => {
    try {
      let response = await fetch("http://127.0.0.1:8000/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      let data = await response.json();

      if (response.status === 200) {
        setAuthTokens(data);
        setUser(data.access);
        localStorage.setItem("authTokens", JSON.stringify(data));
        navigate("/");
        window.location.reload();
      } else {
        // Handle unsuccessful login 
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error.message);
    }
  };

  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    navigate("/login");
  };

  const contextData = {
    user: user,
    authTokens: authTokens,
    loginUser: loginUser,
    logoutUser: logoutUser,
  };

  useEffect(() => {
    if (authTokens) {
      navigate("/");
    } else {
      setLoading(false);
    }
  }, [authTokens, navigate]);

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
