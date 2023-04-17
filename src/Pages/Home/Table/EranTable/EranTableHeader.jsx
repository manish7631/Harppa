import { Box, InputBase, IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import React, { useState } from "react";
import EranTablePage from "./EranTablePage";

import "./EranTableHeader.css";

export const EranTableHeader = () => {
  const [query, setQuery] = useState("");

  return (
    <div id="EranTable_Grid">
      <div className="Eran_Grid_Left"></div>
      <div className="EranTableHeader_Container">
        <Box>
          <Box>
            <Box sx={{ flexGrow: 1 }}>
              <AppBar id="Eran_AppBar" position="static">
                <Toolbar>
                  <h2 className="Eran_Heading">All Data</h2>

                  {/* -------------------------------Search Collaboration Div Here----------------------------------- */}

                  <Box className="EranTableHeader_Section_Left">
                    <InputBase
                      sx={{ ml: 2, flex: 1 }}
                      placeholder="Search..."
                      onChange={(e) => setQuery(e.target.value)}
                    />
                    <IconButton type="button" sx={{ p: 1 }}>
                      <SearchIcon />
                    </IconButton>
                  </Box>

                  {/* ----------------------------Right Side All Button Here------------------------------- */}

                  <Box sx={{ flexGrow: 1 }} />
                  <Box sx={{ display: { xs: "none", md: "flex" } }}></Box>
                </Toolbar>
              </AppBar>
            </Box>
          </Box>
          <Box>
            {/* --------------------------------- Table Call Here---------------------------------- */}
            <EranTablePage query1={query} />
          </Box>
        </Box>
      </div>
      <div className="Eran_Grid_Right"></div>
    </div>
  );
};
