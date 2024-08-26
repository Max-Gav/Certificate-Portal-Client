import React from "react";
import HomeNavbar from "./home-page-components/HomeNavbar";
import HomeDataGrid from "./home-page-components/data-grid/HomeDataGrid";
import ProtectedPage from "../../common/protected-page/ProtectedPage";
import DialogManagerProvider from "../../../hooks/context/dialog-manager/DialogManagerProvider";

const HomePage: React.FC = () => {
  return (
    <>
      <ProtectedPage isTokenRequired={true}>
        <HomeNavbar />
        <DialogManagerProvider>
          <HomeDataGrid />
        </DialogManagerProvider>
      </ProtectedPage>
    </>
  );
};

export default HomePage;
