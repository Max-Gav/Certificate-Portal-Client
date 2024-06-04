import { Box } from "@mui/material";
import React from "react";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";

interface RTLWrapperProps {
  children: React.ReactNode;
}

const RTLWrapper: React.FC<RTLWrapperProps> = ({ children }) => {
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [rtlPlugin],
  });

  return (
    <CacheProvider value={cacheRtl}>
      <Box
        sx={{
          direction: "rtl",
          textAlign: "right",
        }}
      >
        {children}
      </Box>
    </CacheProvider>
  );
};

export default RTLWrapper;
