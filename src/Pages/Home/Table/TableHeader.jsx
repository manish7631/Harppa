import { Box, InputBase, IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import React, { useState } from "react";
import TablePage from "./TablePage";

import "./TableHeader.css";

export const TableHeader = ({ data }) => {
  const [query, setQuery] = useState("");

  return (
    <div id="TableTable_Grid">
      <div className="Table_Grid_Left"></div>
      <div className="TableTableHeader_Container">
        <Box>
          <Box>
            <Box sx={{ flexGrow: 1 }}>
              <AppBar id="Table_AppBar" position="static">
                <Toolbar>
                  <h2 className="Table_Heading">{data.title}</h2>

                  {/* -------------------------------Search Collaboration Div Here----------------------------------- */}

                  {data.search ? (
                    <Box className="TableTableHeader_Section_Left">
                      <InputBase
                        sx={{ ml: 2, flex: 1 }}
                        placeholder="Search..."
                        onChange={(e) => setQuery(e.target.value)}
                      />
                      <IconButton type="button" sx={{ p: 1 }}>
                        <SearchIcon />
                      </IconButton>
                    </Box>
                  ) : null}

                  {/* ----------------------------Right Side All Button Here------------------------------- */}

                  <Box sx={{ flexGrow: 1 }} />
                  <Box sx={{ display: { xs: "none", md: "flex" } }}></Box>
                </Toolbar>
              </AppBar>
            </Box>
          </Box>
          <Box>
            {/* --------------------------------- Table Call Here---------------------------------- */}
            <TablePage query1={query} data={data} />
          </Box>
        </Box>
      </div>
      <div className="Table_Grid_Right"></div>
    </div>
  );
};
