import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import { Missing } from "../pages/404";
import MainLayout from "../layout/MainLayout";
import ActiveFaasPage from "../features/Assessor/pages/ActiveFaasPage";
import AssessorLayout from "../features/assessor/layout/AssessorLayout";

function AppRoutes() {
  return (
    <Routes>
      {/* <Route element={<PersistLogin />}> */}
      <Route path="/login" element={<LoginPage />} />

      {/* <Route element={<RequireAuth />}> */}
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Navigate to="/assessor" />} />

        <Route>
          <Route path="assessor" element={<AssessorLayout />}>
            <Route index element={<ActiveFaasPage />} />
            <Route path="cancels" element={<ActiveFaasPage />} />
            <Route path="pending" element={<ActiveFaasPage />} />
          </Route>
        </Route>
        {/* </Route> */}
      </Route>
      {/* </Route> */}
      <Route path="*" element={<Missing />} />
    </Routes>
  );
}

export default AppRoutes;
