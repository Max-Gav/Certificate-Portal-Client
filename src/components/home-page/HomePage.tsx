import React from "react";
import { Box, Button, Link } from "@mui/material";

const HomePage: React.FC = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", gap:2 }}>
      <Link href="/register" variant="body2">
        <Button variant="contained">{"יצירת משתמש"} </Button>
      </Link>
      <Link href="/login" variant="body2">
        <Button variant="contained">{"התחברות"} </Button>
      </Link>
    </Box>
  );
};

export default HomePage;
