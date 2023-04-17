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
  useTheme,
  Avatar,
  CardContent,
  CardActionArea,
  Card,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

import { Link } from "react-router-dom";
import "./AdvancedSearch.css";

const headCells = [
  {
    id: "seqid",
    numeric: false,
    disablePadding: true,
    label: "seqid",
  },

  {
    id: "seq_in_num",
    numeric: false,
    disablePadding: false,
    label: "seq_in_num",
  },

  {
    id: "link",
    numeric: true,
    disablePadding: false,
    label: "Link",
  },
  {
    id: "site",
    numeric: false,
    disablePadding: false,
    label: "site",
  },
  {
    id: "action",
    numeric: false,
    disablePadding: false,
    label: "Action",
  },
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          {/* <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          /> */}
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{
              fontSize: "17px",
              fontWeight: "bold",
              color: "black",
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

export default function AdvancedTable({ loading, AdvancedData, query1, show }) {
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  //---------------------Pagination  -----------------------------

  const [page, setPage] = useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - AdvancedData.length) : 0;

  // ----------------------------Loading Function Start Here-------------------------------

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (show) {
    return (
      <Box sx={{ width: "100%" }}>
        <Box className="Advanced_TableList_LargeDevice">
          <Paper sx={{ width: "100%", mb: 2 }}>
            {/* ------------------------Table Container Start Here---------------------------------- */}

            <TableContainer>
              <Table
                sx={{ minWidth: 750, background: "white" }}
                aria-labelledby="tableTitle"
                size={dense ? "small" : "medium"}
              >
                <EnhancedTableHead rowCount={AdvancedData.length} />
                <TableBody>
                  {/* ----------------Gawalior Data Maping Here-------------------------- */}

                  {AdvancedData.map((row, index) => {
                    const labelId = `enhanced-table-checkbox-${index}`;
                    let b = row.links;

                    let len = b.length - 2;

                    let str1 = b.substring(2, len);

                    let newArr = str1.split("', '");

                    return (
                      <TableRow
                        hover
                        // onClick={(event) => handleClick(event, row.name)}
                        role="checkbox"
                        tabIndex={-1}
                        key={row.signid}
                      >
                        <TableCell padding="checkbox">
                          {/* <Checkbox
                                 color="primary"
                                 checked={isItemSelected}
                                 inputProps={{
                                   "aria-labelledby": labelId,
                                 }}
                               /> */}
                        </TableCell>
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
                              fontSize: "17px",
                              fontWeight: "600",
                              color: "black",
                            }}
                          >
                            {" "}
                            {row.seqid}
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
                              fontSize: "17px",
                              fontWeight: "600",
                              color: "black",
                            }}
                          >
                            {" "}
                            {row.seq_in_num}
                          </span>
                        </TableCell>
                        <TableCell align="right">
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "right",
                            }}
                          >
                            {newArr.map((e, index) => {
                              try {
                                let n = e.split("/").pop();

                                let data1 = require(`../../static/ivcgraphemes/${n}`);
                                return (
                                  <Avatar
                                    key={n}
                                    sx={{
                                      width: "auto",
                                      height: "60px",
                                      margin: "4px",
                                      padding: "2px",
                                    }}
                                    src={data1}
                                    variant="square"
                                  />
                                );
                              } catch (err) {
                                console.log("err", err);
                              }
                            })}
                          </Box>
                        </TableCell>

                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="1"
                          sx={{
                            fontSize: "17px",
                            fontWeight: "600",
                            color: "black",
                          }}
                        >
                          {row.site}
                        </TableCell>
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="1"
                        >
                          <Link
                            style={{
                              textDecoration: "none",
                              fontSize: "17px",
                              fontWeight: "600",
                              color: "black",
                            }}
                            to={`/erantabledetails/${row.id}`}
                          >
                            {" "}
                            See Details
                          </Link>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                  {emptyRows > 0 && (
                    <TableRow
                    // style={{
                    //   height: (dense ? 33 : 53) * emptyRows,
                    // }}
                    >
                      {/* <TableCell colSpan={6} /> */}
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>

            {/* -----------------------Pagination Here--------------------------- */}

            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={AdvancedData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </Box>

        <Box className="Advanced_CardList_MobileDevice">
          {AdvancedData.slice(
            page * rowsPerPage,
            page * rowsPerPage + rowsPerPage
          ).map((row, index) => {
            const labelId = `enhanced-table-checkbox-${index}`;

            let b = row.links;

            let len = b.length - 2;

            let str1 = b.substring(2, len);

            let newArr = str1.split("', '");
            return (
              <Card className="Advanced_Card_Mobile">
                <CardActionArea>
                  <CardContent
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <h3 className="Advanced_Mobile_Card_Left">Seqid</h3>

                    <h4 className="Advanced_Mobile_Card_Right">
                      <span
                        style={{
                          width: "100px",
                          overflow: "hidden",
                          display: "inline-block",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          textAlign: "right",
                        }}
                      >
                        {row.seqid}
                      </span>
                    </h4>
                  </CardContent>
                  <CardContent
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <h3 className="Advanced_Mobile_Card_Left">Seq_In_Nums</h3>

                    <h4 className="Advanced_Mobile_Card_Right">
                      <span
                        style={{
                          width: "100px",
                          overflow: "hidden",
                          display: "inline-block",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          textAlign: "right",
                        }}
                      >
                        {row.seq_in_num}
                      </span>
                    </h4>
                  </CardContent>
                  <CardContent
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <h3 className="Advanced_Mobile_Card_Left">Site</h3>

                    <h4 className="Advanced_Mobile_Card_Right">
                      <span
                        style={{
                          width: "100px",
                          overflow: "hidden",
                          display: "inline-block",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          textAlign: "right",
                        }}
                      >
                        {row.site}
                      </span>
                    </h4>
                  </CardContent>
                  <CardContent
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <h3 className="Advanced_Mobile_Card_Left">Links</h3>

                    <h4 className="Advanced_Mobile_Card_Right">
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "right",
                        }}
                      >
                        {newArr.map((e, index) => {
                          try {
                            let n = e.split("/").pop();

                            let data1 = require(`../../static/ivcgraphemes/${n}`);
                            return (
                              <img
                                key={index}
                                sx={{
                                  width: "auto",
                                  height: "30px",
                                  margin: "4px",
                                  padding: "2px",
                                }}
                                src={data1}
                                className="Advanced_Card_Img"
                              />
                            );
                          } catch (err) {
                            console.log("err", err);
                          }
                        })}
                      </Box>
                      {/* </span> */}
                    </h4>
                  </CardContent>
                  <CardContent
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <h3 className="Advanced_Mobile_Card_Left">Actions</h3>

                    <h4 className="Advanced_Mobile_Card_Right">
                      <span
                        style={{
                          width: "100px",
                          overflow: "hidden",
                          display: "inline-block",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          textAlign: "right",
                        }}
                      >
                        <Link
                          style={{
                            textDecoration: "none",
                            color: `black`,
                          }}
                          to={`/erantabledetails/${row.id}`}
                        >
                          {" "}
                          See Details
                        </Link>
                      </span>
                    </h4>
                  </CardContent>
                </CardActionArea>
              </Card>
            );
          })}

          {/*  ---------------------Pagination For Normal Data Here----------------- */}
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={AdvancedData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Box>
      </Box>
    );
  }
}
