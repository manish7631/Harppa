import { Box, useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import React, { useState } from "react";
import BnglTablePage from "./BnglTablePage";

import "./BnglTableHeader.css";

export const BnglTableHeader = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="BnglTableHeader_Container">
      <Box>
        <Box>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar id="Bngl_AppBar" position="static">
              <Toolbar>
                <h2 className="Bngl_Heading">BNGL</h2>

                {/* ----------------------------Right Side All Button Here------------------------------- */}

                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: { xs: "none", md: "flex" } }}></Box>
              </Toolbar>
            </AppBar>
          </Box>
        </Box>
        <Box>
          {/* --------------------------------- Table Call Here---------------------------------- */}
          <BnglTablePage query1={query} />
        </Box>
      </Box>
    </div>
  );
};
