import React from "react";
import Tab from "../../../components/layout/Tab";
import { ASSESSOR_TAB_LINKS } from "../utils/constant";
import { Outlet } from "react-router-dom";

function AssessorLayout() {
  return (
    <>
      <Tab links={ASSESSOR_TAB_LINKS} />
      <Outlet />
    </>
  );
}

export default AssessorLayout;
