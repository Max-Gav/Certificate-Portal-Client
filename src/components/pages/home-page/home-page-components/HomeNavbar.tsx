import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import useLogout from "../../../../hooks/mutations/auth/useLogout";
import { APP_NAME } from "../../../../common/constants";
import theme from "../../../../config/theme/AppTheme";
import { useIsLoggedIn } from "../../../../hooks/context/is-logged-in/useIsLoggedIn";

const HomeNavbar: React.FC = () => {
  const [logoutMutation, statusCode] = useLogout();
  const navigate = useNavigate();
  const { setIsLoggedIn } = useIsLoggedIn();
    
  useEffect(() => {
    switch (statusCode) {
      case 200:
        navigate("/login");
        setIsLoggedIn(false);
        break;
      default:
        break;
    }
  }, [statusCode]);
  return (
    <AppBar
      elevation={0}
      sx={{ position: "relative", backgroundColor: theme.palette.black.dark }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h5" sx={{ fontWeight: "bolder" }}>
          {APP_NAME}
        </Typography>
        <Button
          variant="contained"
          color="error"
          startIcon={<LogoutIcon />}
          onClick={() => {
            logoutMutation.mutate();
          }}
        >
          התנתקות
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default HomeNavbar;
