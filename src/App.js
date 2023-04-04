import React from "react";
import { GlobalStyle } from "./styles/GlobalStyle";
import { HeaderBar } from "./components/HeaderBar";
import { Home } from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Detail } from "./pages/Detail";
import { NavBar } from "./components/NavBar";
import { Favs } from "./pages/Favs";
import { User } from "./pages/User";
import AuthProvider from "./context/AuthContext";
import PrivateRoute from "./context/PrivateRoute";

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <GlobalStyle />
        <HeaderBar />
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pet/:id" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/favs" element={<PrivateRoute component={Favs} />} />
            <Route path="/me" element={<PrivateRoute component={User} />} />
          </Routes>
        </AuthProvider>
        <NavBar />
      </BrowserRouter>
    </div>
  );
};
