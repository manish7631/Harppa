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
  CardContent,
  CardActionArea,
  Card,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector, useDispatch } from "react-redux";
import {
  EranImageGetFunction,
  EranSearchImageGetFunction,
} from "../../../redux/Application/action";

import { Link } from "react-router-dom";
import "./TableHeader.css";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "seqid",
    numeric: false,
    disablePadding: false,
    label: "Seqid",
  },

  {
    id: "seq_in_nums",
    numeric: true,
    disablePadding: true,
    label: "Seq_In_Nums",
  },

  {
    id: "sequence",
    numeric: true,
    disablePadding: true,
    label: "Sequence image",
  },
  {
    id: "site",
    numeric: true,
    disablePadding: false,
    label: "Site",
  },

  {
    id: "action",
    numeric: false,
    disablePadding: false,
    label: "Actions",
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
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "center"}
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

export default function TablePage({ loading, countryList, query1, data }) {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(25);

  //---------------------Pagination  -----------------------------

  const [page, setPage] = useState(0);
  const [pageSearch, setPageSearch] = useState(0);
  const [perpage, setPerpage] = useState(25);
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    setQuery(query1);
  }, [query1]);

  // ------------------First Image Function Call Here-----------------------------------

  useEffect(() => {
    dispatch(EranSearchImageGetFunction(query));
  }, [query]);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

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

  // // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0
      ? Math.max(
          0,
          (1 + page) * rowsPerPage - data.search
            ? data.search.length
            : data.data.length
        )
      : 0;

  // ----------------------------Loading Function Start Here-------------------------------

  if (data.isLoading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Box className="Eran_TableList_LargeDevice">
        <Paper sx={{ width: "100%", mb: 2 }}>
          {/* ------------------------Table Container Start Here---------------------------------- */}

          {query ? (
            <TableContainer
              sx={
                {
                  // padding:"10px"
                }
              }
            >
              <Table
                sx={{ minWidth: 750, background: "white" }}
                aria-labelledby="tableTitle"
                size={dense ? "small" : "medium"}
              >
                <EnhancedTableHead
                  order={order}
                  orderBy={orderBy}
                  onRequestSort={handleRequestSort}
                  rowCount={data.search ? data.search.length : data.data.length}
                />
                <TableBody>
                  {/* -------------------Eran Search Data Maping Here------------------- */}

                  {data.EranImageSearchData.slice(
                    pageSearch * perpage,
                    pageSearch * perpage + perpage
                  ).map((row, index) => {
                    const labelId = `enhanced-table-checkbox-${index}`;
                    let b = row.links;

                    let len = b.length - 2;

                    let str1 = b.substring(2, len);

                    let newArr = str1.split("', '");
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.seqid}
                      >
                        <TableCell align="left">
                          <span
                            style={{
                              width: "100px",
                              overflow: "hidden",
                              display: "inline-block",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                              textAlign: "right",
                              color: "#3a3c3e",
                              fontSize: "14px",
                              fontWeight: "500",
                            }}
                          >
                            {" "}
                            {row.seqid}
                          </span>
                        </TableCell>
                        <TableCell align="right">
                          <span
                            style={{
                              width: "100px",
                              overflow: "hidden",
                              display: "inline-block",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                              textAlign: "right",
                              color: "#3a3c3e",
                              fontSize: "14px",
                              fontWeight: "500",
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

                                let data1 = require(`../../../static/ivcgraphemes/${n}`);
                                return (
                                  <Avatar
                                    key={n}
                                    sx={{
                                      width: "auto",
                                      minHeight: "40px",
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

                        <TableCell align="right">
                          <span
                            style={{
                              width: "100px",
                              overflow: "hidden",
                              display: "inline-block",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                              textAlign: "center",
                              color: "#3a3c3e",
                              fontSize: "14px",
                              fontWeight: "500",
                            }}
                          >
                            {" "}
                            {row.site}
                          </span>
                        </TableCell>

                        <TableCell align="center" marginLeft="20px">
                          <Link
                            style={{
                              textDecoration: "none",
                              color: "#3a3c3e",
                              fontSize: "14px",
                              fontWeight: "500",
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
                  {emptyRows > 0 && <TableRow> </TableRow>}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <TableContainer>
              <Table
                sx={{ minWidth: 750, background: "white" }}
                aria-labelledby="tableTitle"
                size={dense ? "small" : "medium"}
              >
                <EnhancedTableHead
                  order={order}
                  orderBy={orderBy}
                  onRequestSort={handleRequestSort}
                  rowCount={data.search ? data.search.length : data.data.length}
                />
                <TableBody>
                  {/* ----------------Eran Data Maping Here-------------------------- */}

                  {stableSort(data.data, getComparator(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => {
                      const labelId = `enhanced-table-checkbox-${index}`;
                      let b = row.links;

                      let len = b.length - 2;

                      let str1 = b.substring(2, len);

                      let newArr = str1.split("', '");
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.seqid}
                        >
                          <TableCell align="left">
                            <span
                              style={{
                                width: "100px",
                                overflow: "hidden",
                                display: "inline-block",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                                textAlign: "right",
                                color: "#3a3c3e",
                                fontSize: "14px",
                                fontWeight: "500",
                              }}
                            >
                              {" "}
                              {row.seqid}
                            </span>
                          </TableCell>
                          <TableCell align="right">
                            <span
                              style={{
                                width: "100px",
                                overflow: "hidden",
                                display: "inline-block",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                                textAlign: "right",
                                color: "#3a3c3e",
                                fontSize: "14px",
                                fontWeight: "500",
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

                                  let data1 = require(`../../../static/ivcgraphemes/${n}`);
                                  return (
                                    <Avatar
                                      sx={{
                                        width: "auto",
                                        minHeight: "40px",
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

                          <TableCell align="right">
                            <span
                              style={{
                                width: "100px",
                                overflow: "hidden",
                                display: "inline-block",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                                textAlign: "center",
                                color: "#3a3c3e",
                                fontSize: "14px",
                                fontWeight: "500",
                              }}
                            >
                              {" "}
                              {row.site}
                            </span>
                          </TableCell>

                          <TableCell align="center" marginLeft="20px">
                            <Link
                              style={{
                                textDecoration: "none",
                                color: "#3a3c3e",
                                fontSize: "14px",
                                fontWeight: "500",
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
                  {emptyRows > 0 && <TableRow> </TableRow>}
                </TableBody>
              </Table>
            </TableContainer>
          )}
          {/* ----------------------Pagination Start Here ----------------------- */}
          {query ? (
            // ---------------------Pagination For Search Here-----------------------
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={data.search ? data.search.length : data.data.length}
              rowsPerPage={perpage}
              page={pageSearch}
              onPageChange={handleChangePageSearch}
              onRowsPerPageChange={handleChangeRowsPerPageSearch}
            />
          ) : (
            // ---------------------Pagination For Normal Data Here-----------------
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={data.search ? data.search.length : data.data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          )}
        </Paper>
      </Box>
      <Box className="Table_CardList_MobileDevice">
        {query ? (
          <>
            {data.EranImageSearchData.slice(
              pageSearch * perpage,
              pageSearch * perpage + perpage
            ).map((row, index) => {
              const labelId = `enhanced-table-checkbox-${index}`;

              let b = row.links;

              let len = b.length - 2;

              let str1 = b.substring(2, len);

              let newArr = str1.split("', '");
              return (
                <Card className="Table_Card_Mobile">
                  <CardActionArea>
                    <CardContent
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <h3 className="Table_Mobile_Card_Left">Seqid</h3>

                      <h4 className="Table_Mobile_Card_Right">
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
                      <h3 className="Table_Mobile_Card_Left">Seq_In_Nums</h3>

                      <h4 className="Table_Mobile_Card_Right">
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
                      <h3 className="Table_Mobile_Card_Left">Site</h3>

                      <h4 className="Table_Mobile_Card_Right">
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
                      <h3 className="Table_Mobile_Card_Left">Links</h3>

                      <h4 className="Table_Mobile_Card_Right">
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "right",
                          }}
                        >
                          {newArr.map((e, index) => {
                            try {
                              let n = e.split("/").pop();

                              let data1 = require(`../../../static/ivcgraphemes/${n}`);
                              return (
                                <Avatar
                                  key={index}
                                  sx={{
                                    width: "auto",
                                    height: "30px",
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
                        {/* </span> */}
                      </h4>
                    </CardContent>
                    <CardContent
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <h3 className="Table_Mobile_Card_Left">Actions</h3>

                      <h4 className="Table_Mobile_Card_Right">
                        <span
                          style={{
                            width: "150px",
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
          </>
        ) : (
          <>
            {data.data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                const labelId = `enhanced-table-checkbox-${index}`;

                let b = row.links;

                let len = b.length - 2;

                let str1 = b.substring(2, len);

                let newArr = str1.split("', '");
                return (
                  <Card className="Table_Card_Mobile">
                    <CardActionArea>
                      <CardContent
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <h3 className="Table_Mobile_Card_Left">Seqid</h3>

                        <h4 className="Table_Mobile_Card_Right">
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
                        <h3 className="Table_Mobile_Card_Left">Seq_In_Nums</h3>

                        <h4 className="Table_Mobile_Card_Right">
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
                        <h3 className="Table_Mobile_Card_Left">Site</h3>

                        <h4 className="Table_Mobile_Card_Right">
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
                        <h3 className="Table_Mobile_Card_Left">Links</h3>

                        <h4 className="Table_Mobile_Card_Right">
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "right",
                            }}
                          >
                            {newArr.map((e, index) => {
                              try {
                                let n = e.split("/").pop();

                                let data1 = require(`../../../static/ivcgraphemes/${n}`);
                                return (
                                  <img
                                    className="Table_Card_Img"
                                    key={index}
                                    src={data1}
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
                        <h3 className="Table_Mobile_Card_Left">Actions</h3>

                        <h4 className="Table_Mobile_Card_Right">
                          <span
                            style={{
                              width: "150px",
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
          </>
        )}

        {query ? (
          // ---------------------Pagination For Search Here-----------------------
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={data.search ? data.search.length : data.data.length}
            rowsPerPage={perpage}
            page={pageSearch}
            onPageChange={handleChangePageSearch}
            onRowsPerPageChange={handleChangeRowsPerPageSearch}
          />
        ) : (
          // ---------------------Pagination For Normal Data Here-----------------
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={data.search ? data.search.length : data.data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        )}
      </Box>
    </Box>
  );
}
