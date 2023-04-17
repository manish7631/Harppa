import { Box, useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import React, { useState } from "react";
import BnawaliTablePage from "./BnawaliTablePage";

import "./BnawaliTableHeader.css";

export const BnawaliTableHeader = () => {
  const [query, setQuery] = useState("");

  return (
    <div id="BanawaliTable_Grid">
      <div className="Banawali_Grid_Left"></div>
      <div className="BanawaliTableHeader_Container">
        <Box>
          <Box>
            <Box sx={{ flexGrow: 1 }}>
              <AppBar id="Banawali_AppBar" position="static">
                <Toolbar>
                  <h2 className="Banawali_Heading">Banawali</h2>

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
            <BnawaliTablePage query1={query} />
          </Box>
        </Box>
      </div>
      <div className="Banawali_Grid_Right"></div>
    </div>
  );
};
