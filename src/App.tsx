import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "./components/signup-page/SignUpPage";
import RTLWrapper from "./common/wrappers/RTLWrapper";
import LoginPage from "./components/login-page/LoginPage";
import HomePage from "./components/home-page/HomePage";
import AppRoutes from "./config/AppRoutes";
function App() {
  return (
    <BrowserRouter>
      <RTLWrapper>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path={AppRoutes.LOGIN} element={<LoginPage />} />
          <Route path={AppRoutes.REGISTER} element={<SignUpPage />} />
        </Routes>
      </RTLWrapper>
    </BrowserRouter>
  );
}

export default App;
