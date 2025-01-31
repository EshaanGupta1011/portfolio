import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import App from "./App";
import AcmPage from "./pages/acmPage/AcmPage";
import AmoliPage from "./pages/amoliPage/AmoliPage";
import DarpanPage from "./pages/darpanPage/DarpanPage";
import DvPage from "./pages/dvPage/DvPage";
import HomePage from "./pages/homepage/HomePage";
import QuaminPage from "./pages/quaminPage/QuaminPage";
import ReliancePage from "./pages/reliancePage/ReliancePage";
import SciClubPage from "./pages/sciClubPage/SciClubPage";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<HomePage />} />
      <Route path="/acm" element={<AcmPage />} />
      <Route path="/amoli" element={<AmoliPage />} />
      <Route path="/darpan" element={<DarpanPage />} />
      <Route path="/dantvilla" element={<DvPage />} />
      <Route path="/quamin" element={<QuaminPage />} />
      <Route path="/reliance" element={<ReliancePage />} />
      <Route path="/sciClub" element={<SciClubPage />} />
    </Switch>
  );
};

export default Routes;
