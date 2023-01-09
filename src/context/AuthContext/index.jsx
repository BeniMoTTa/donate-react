import React from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { toast } from "react-toastify";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = React.useState([]);
  const [donation, setDonation] = React.useState([]);
  const navigate = useNavigate();
  const [globalLoading, setGlobalLoading] = useState(false);

  React.useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      setGlobalLoading(true);
      const res = await api.get("users", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await res.data;

      setUsers(json);
    } catch (error) {
      console.error(error);
    } finally {
      setGlobalLoading(false);
    }
  };

  React.useEffect(() => {
    getDonations();
  }, []);

  const getDonations = async () => {
    try {
      const res = await api.get(`donations`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await res.data;
      setDonation(json);
    } catch (error) {
      console.error(error);
    }
  };

  const reqLogin = async (data) => {
    try {
      const response = await api.post("/login", data);

      window.localStorage.setItem("@USER:ID", response.data.user.id);
      window.localStorage.setItem("@USER:TOKEN", response.data.accessToken);
      toast.success("Usuario logado com sucesso");
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };

  const reqRegister = async (data) => {
    try {
      const response = await api.post("/register", data);
      getUsers();
      toast.success("Usuario criado com sucesso");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };

  const userLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        users,
        donation,
        getUsers,
        getDonations,
        userLogout,
        reqRegister,
        reqLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
