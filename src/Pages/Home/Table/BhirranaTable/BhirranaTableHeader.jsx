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
    <div id="BhirranaTable_Grid">
      <div className="Bhirrana_Grid_Left"></div>
      <div className="BhirranaTableHeader_Container">
        <Box>
          <Box>
            <Box sx={{ flexGrow: 1 }}>
              <AppBar id="Bhirrana_AppBar" position="static">
                <Toolbar>
                  <h2 className="Banawali_Heading">Bhirrana</h2>

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
      <div className="Bhirrana_Grid_Right"></div>
    </div>
  );
};
