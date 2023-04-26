import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import {
  Box,
  Table,
  Typography,
  Avatar,
  Card,
  CardActionArea,
  CardContent,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector, useDispatch } from "react-redux";
import { GawaliorImageGetFunction } from "../../../redux/Application/action";
import "./GawaliorTableHeader.css";

const headCells = [
  {
    id: "signid",
    numeric: false,
    disablePadding: true,
    label: "Signid",
  },

  {
    id: "wellsid",
    numeric: false,
    disablePadding: false,
    label: "Wellsid",
  },

  {
    id: "link",
    numeric: false,
    disablePadding: false,
    label: "Link",
  },
  {
    id: "frequency",
    numeric: false,
    disablePadding: false,
    label: "Frequency",
  },
];

function EnhancedTableHead(props) {
  const {
    order,
    orderBy,

    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox"></TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{
              fontsize: "15px",
              fontWeight: "900",
              color: "#3a3c3e",
            }}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Nutrition
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function GawaliorTablePage({ loading, countryList, query1 }) {
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(25);

  //---------------------Pagination  -----------------------------

  const [page, setPage] = useState(0);
  const [pageSearch, setPageSearch] = useState(0);
  const [perpage, setPerpage] = useState(25);
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();

  //---------------------UseSelector Redux Data Call --------------------------------------

  const { isLoading, GawaliorImageData } = useSelector(
    (state) => state.ApplicationReducer
  );

  useEffect(() => {
    setQuery(query1);
  }, [query1]);

  // ------------------First Image Function Call Here-----------------------------------

  useEffect(() => {
    dispatch(GawaliorImageGetFunction());
  }, []);

  const handleChangePageSearch = (event, newPage) => {
    setPageSearch(newPage);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeRowsPerPageSearch = (event) => {
    setPerpage(parseInt(event.target.value, 10));
    setPageSearch(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  // // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - GawaliorImageData.length)
      : 0;

  // ----------------------------Loading Function Start Here-------------------------------

  if (isLoading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Box className="Gawalior_TableList_LargeDevice">
        <Paper sx={{ width: "100%", mb: 2 }}>
          {/* ------------------------Table Container Start Here---------------------------------- */}

          <TableContainer>
            <Table
              sx={{ minWidth: 750, background: "white" }}
              aria-labelledby="tableTitle"
              size={dense ? "small" : "medium"}
            >
              <EnhancedTableHead rowCount={GawaliorImageData.length} />
              <TableBody>
                {/* ----------------Gawalior Data Maping Here-------------------------- */}

                {GawaliorImageData.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                ).map((row, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`;

                  const a = row.link;
                  let n = a.split("/").pop();
                  let data1 = "";
                  function HandleImage(n) {
                    try {
                      data1 = require(`../../../static/ivcgraphemes/${n}`);
                    } catch (err) {
                      console.log("err", err);
                    }
                  }

                  HandleImage(n);

                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.signid}
                    >
                      <TableCell padding="checkbox"></TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        <span
                          style={{
                            width: "100px",
                            overflow: "hidden",
                            display: "inline-block",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            color: "#3a3c3e",
                            fontSize: "14px",
                            fontWeight: "500",
                          }}
                        >
                          {" "}
                          {row.signid}
                        </span>
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="1"
                      >
                        <span
                          style={{
                            width: "100px",
                            overflow: "hidden",
                            display: "inline-block",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            color: "#3a3c3e",
                            fontSize: "14px",
                            fontWeight: "500",
                          }}
                        >
                          {" "}
                          {row.wellsid}
                        </span>
                      </TableCell>
                      <TableCell align="left">
                        <Box
                          sx={{
                            display: "flex",
                            float: "center",
                            padding: "2px",
                          }}
                        >
                          <Avatar
                            sx={{
                              width: "auto",
                              minHeight: "40px",
                              margin: "10px",
                            }}
                            src={data1}
                            variant="square"
                          />{" "}
                        </Box>
                      </TableCell>

                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="1"
                        sx={{
                          color: "#3a3c3e",
                          fontSize: "14px",
                          fontWeight: "500",
                        }}
                      >
                        {row.frequency}
                      </TableCell>
                    </TableRow>
                  );
                })}
                {emptyRows > 0 && <TableRow></TableRow>}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Pagination For Normal Data Here  */}
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={GawaliorImageData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>

      <Box className="Gawalior_CardList_MobileDevice">
        {GawaliorImageData.slice(
          page * rowsPerPage,
          page * rowsPerPage + rowsPerPage
        ).map((row, index) => {
          const labelId = `enhanced-table-checkbox-${index}`;

          const a = row.link;
          let n = a.split("/").pop();
          let data1 = "";
          function HandleImage(n) {
            try {
              data1 = require(`../../../static/ivcgraphemes/${n}`);
            } catch (err) {
              console.log("err", err);
            }
          }

          HandleImage(n);
          return (
            <Card className="Gwalior_Card_Mobile">
              <CardActionArea>
                <CardContent
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <h3 className="Signary_Mobile_Card_Left"> Signid</h3>

                  <h4 className="Signary_Mobile_Card_Right">{row.signid}</h4>
                </CardContent>
                <CardContent
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <h3 className="Signary_Mobile_Card_Left">Wellsid</h3>

                  <h4 className="Signary_Mobile_Card_Right">{row.wellsid}</h4>
                </CardContent>
                <CardContent
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <h3 className="Signary_Mobile_Card_Left">Frequency</h3>

                  <h4 className="Signary_Mobile_Card_Right">{row.frequency}</h4>
                </CardContent>
                <CardContent
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h3 className="Signary_Mobile_Card_Left">Links</h3>

                  <h4 className="Signary_Mobile_Card_Right">
                    <Box
                      sx={{
                        display: "flex",
                        float: "center",
                        padding: "2px",
                      }}
                    >
                      <img
                        className="Gawalior_Card_Img"
                        key={index}
                        src={data1}
                      />
                    </Box>
                  </h4>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}

        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={GawaliorImageData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
    </Box>
  );
}
