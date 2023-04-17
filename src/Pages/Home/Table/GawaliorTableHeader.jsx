import { Box, useTheme, InputBase, IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import React, { useState } from "react";
import GawaliorTablePage from "./GawaliorTablePage";

import "./GawaliorTableHeader.css";

export const GawaliorTableHeader = () => {
  const [query, setQuery] = useState("");

  return (
    <div id="GawaliorTable_Grid">
      <div className="Gawalior_Grid_Left"></div>
      <div className="GawaliorTableHeader_Container">
        <Box>
          <Box>
            <Box sx={{ flexGrow: 1 }}>
              <AppBar id="Signary_AppBar" position="static">
                <Toolbar>
                  <h2 className="Signary_Heading"> Gwalior Stone</h2>

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
            <GawaliorTablePage query1={query} />
          </Box>
        </Box>
      </div>
      <div className="Gawalior_Grid_Right"></div>
    </div>
  );
};
