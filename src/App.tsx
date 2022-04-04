import React from "react";

import { Routes, Route } from "react-router-dom";

import { URL } from "constants/urls";
import { Page404 } from "pages/404";
import { PageHome } from "pages/home";

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path={URL.HOME} element={<PageHome />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
