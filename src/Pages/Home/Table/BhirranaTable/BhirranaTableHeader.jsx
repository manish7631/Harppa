import { Box, useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import React, { useState } from "react";
import BhirranaTablePage from "./ BhirranaTablePage";
import { tokens } from "../../../../theme"
 import './ BhirranaTableHeader.css'

export const BhirranaTableHeader = () => {
  const [query, setQuery] = useState("");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div className="BhirranaTableHeader_Container"> 
      <Box>
        <Box>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar
               
              position="static"
            >
              <Toolbar>
                <Typography
                  variant="h4"
                  noWrap
                  component="div"
                  sx={{ display: { xs: "block", sm: "block" , fontWeight:"bold", color:"white"} }}
                 
                >
           Bhirrana
                </Typography>

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