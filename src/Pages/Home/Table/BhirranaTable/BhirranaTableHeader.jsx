import { Box, useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import React, { useState } from "react";
import BhirranaTablePage from "./BhirranaTablePage";
import "./BhirranaTableHeader.css";

export const BhirranaTableHeader = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="BhirranaTableHeader_Container">
      <Box>
        <Box>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar id="Bhirrana_AppBar" position="static">
              <Toolbar>
                <h2 className="Banawali_Heading">Bhirrana</h2>

                {/* -------------------------------Search Collaboration Div Here----------------------------------- */}

                {/* <Box
                  backgroundColor={colors.primary[400]}
                  className="GawaliorTableHeader_Section_Left"
                >
                  <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search..." />
                  <IconButton type="button" sx={{ p: 1 }}>
                    <SearchIcon />
                  </IconButton>
                </Box> */}

                {/* ----------------------------Right Side All Button Here------------------------------- */}

                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: { xs: "none", md: "flex" } }}></Box>
              </Toolbar>
            </AppBar>
          </Box>
        </Box>
        <Box>
          {/* --------------------------------- Table Call Here---------------------------------- */}
          <BhirranaTablePage query1={query} />
        </Box>
      </Box>
    </div>
  );
};
