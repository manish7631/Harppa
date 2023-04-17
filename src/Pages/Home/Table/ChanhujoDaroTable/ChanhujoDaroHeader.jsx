import { Box, useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import React, { useState } from "react";
import ChanhujoDaroTablePage from "./ChanhujoDaroTablePage";

import "./ChanhujoDaro.css";

export const ChanhujoDaroTableHeader = () => {
  const [query, setQuery] = useState("");

  return (
    <div id="ChanhuTable_Grid">
      <div className="Chanhu_Grid_Left"></div>
      <div className="ChanhujoDaroTableHeader_Container">
        <Box>
          <Box>
            <Box sx={{ flexGrow: 1 }}>
              <AppBar id="Chanhu_AppBar" position="static">
                <Toolbar>
                  <h2 className="Chanhu_Heading">Chanhujo-daro</h2>

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
            <ChanhujoDaroTablePage query1={query} />
          </Box>
        </Box>
      </div>
      <div className="Chanhu_Grid_Right"></div>
    </div>
  );
};
