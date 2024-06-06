import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "./components/signup-page/SignUpPage";
import RTLWrapper from "./common/wrappers/RTLWrapper";
import LoginPage from "./components/login-page/LoginPage";
import HomePage from "./components/home-page/HomePage";
import AppRoutes from "./config/routes/AppRoutes";
import { ThemeProvider } from "@mui/material";
import theme from "./config/theme/AppTheme";
import { useEffect } from "react";
import { APP_NAME } from "./common/constant";

function configureHtmlFile() {
  document.body.style.backgroundColor = theme.palette.info.main;
  document.title = APP_NAME;
}
function App() {
  useEffect(() => {
    configureHtmlFile();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <RTLWrapper>
          <Routes>
            <Route path={AppRoutes.LOGIN} element={<LoginPage />} />
            <Route path={AppRoutes.REGISTER} element={<SignUpPage />} />
          </Routes>
        </RTLWrapper>
        <Routes>
          <Route index element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
