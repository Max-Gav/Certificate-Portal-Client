import React from "react";
import HomeNavbar from "./home-page-components/HomeNavbar";
import HomeDataGrid from "./home-page-components/data-grid/HomeDataGrid";
import ProtectedPage from "../../common/protected-page/ProtectedPage";
import SelectedCertificateIdProvider from "../../../hooks/context/selected-certificate-row/SelectedCertificateIdProvider";

const HomePage: React.FC = () => {
  return (
    <>
      <ProtectedPage isTokenRequired={true}>
        <HomeNavbar />
        {/* <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
        <Link href="/register" variant="body2">
          <Button variant="contained">{"יצירת משתמש"} </Button>
        </Link>
        <Link href="/login" variant="body2">
          <Button variant="contained">{"התחברות"} </Button>
        </Link>
      </Box> */}
        <SelectedCertificateIdProvider>
          <HomeDataGrid />
        </SelectedCertificateIdProvider>
      </ProtectedPage>
    </>
  );
};

export default HomePage;
