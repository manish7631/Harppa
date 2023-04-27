import { Box, InputBase, IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import React, { useEffect, useState } from "react";
import TablePage from "./TablePage";

import "./TableHeader.css";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  BNGLImageGetFunction,
  BhirranaImageGetFunction,
  BnawaliImageGetFunction,
  ChanhujoDaroImageGetFunction,
  DholaviraImageGetFunction,
  FarmanaImageGetFunction,
  HarappaImageGetFunction,
  IMPLImageGetFunction,
  KalibanganImageGetFunction,
  KanmerImageGetFunction,
  KhirsaraImageGetFunction,
  LothalImageGetFunction,
  MISCImageGetFunction,
  MohenjoDaroImageGetFunction,
  POTImageGetFunction,
  RODImageGetFunction,
  RakhigarhiImageGetFunction,
  SEALImageGetFunction,
  TABImageGetFunction,
  TAGImageGetFunction,
} from "../../../redux/Application/action";

export const TableHeader = ({ data }) => {
  const loaction = useLocation();
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  // -------------------------Function Calling Here--------------------------------
  useEffect(() => {
    if (loaction.pathname === "/bnawalitablepage") {
      dispatch(BnawaliImageGetFunction());
    }
    if (loaction.pathname === "/bhirranatablepage") {
      dispatch(BhirranaImageGetFunction());
    }
    if (loaction.pathname === "/chanhujotablepage") {
      dispatch(ChanhujoDaroImageGetFunction());
    }
    if (loaction.pathname === "/dholaviratablepage") {
      dispatch(DholaviraImageGetFunction());
    }
    if (loaction.pathname === "/farmanatablepage") {
      dispatch(FarmanaImageGetFunction());
    }
    if (loaction.pathname === "/harappatablepage") {
      dispatch(HarappaImageGetFunction());
    }

    if (loaction.pathname === "/kalibangantablepage") {
      dispatch(KalibanganImageGetFunction());
    }
    if (loaction.pathname === "/kanmertablepage") {
      dispatch(KanmerImageGetFunction());
    }

    if (loaction.pathname === "/khirsaratablepage") {
      dispatch(KhirsaraImageGetFunction());
    }

    if (loaction.pathname === "/lothaltablepage") {
      dispatch(LothalImageGetFunction());
    }

    if (loaction.pathname === "/mohenjodarotablepage") {
      dispatch(MohenjoDaroImageGetFunction());
    }

    if (loaction.pathname === "/rakhigarhitablepage") {
      dispatch(RakhigarhiImageGetFunction());
    }

    if (loaction.pathname === "/impltablepage") {
      dispatch(IMPLImageGetFunction());
    }

    if (loaction.pathname === "/bngltablepage") {
      dispatch(BNGLImageGetFunction());
    }

    if (loaction.pathname === "/misctablepage") {
      dispatch(MISCImageGetFunction());
    }

    if (loaction.pathname === "/potterytablepage") {
      dispatch(POTImageGetFunction());
    }

    if (loaction.pathname === "/rodtablepage") {
      dispatch(RODImageGetFunction());
    }

    if (loaction.pathname === "/sealtablepage") {
      dispatch(SEALImageGetFunction());
    }

    if (loaction.pathname === "/tablettablepage") {
      dispatch(TABImageGetFunction());
    }

    if (loaction.pathname === "/tagtablepage") {
      dispatch(TAGImageGetFunction());
    }
  }, []);

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
