import { Box, Button, Card, TextField, Typography } from "@mui/material";

import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./Login.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ClearErrorsFun, LoginFun } from "../../redux/Auth/action";
import { useEffect } from "react";
import Loader from "../Loader/Loader";

const checkoutSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
});
const initialValues = {
  email: "",
  password: "",
};

const Login = ({ history, location }) => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.AuthReducer
  );

  const handleFormSubmit = (values) => {
    const email = values.email;
    const password = values.password;
    dispatch(LoginFun({ email, password }));
  };

  useEffect(() => {
    if (error) {
      console.log("err", error);
      dispatch(ClearErrorsFun());
    }

    if (isAuthenticated) {
      navigate("/");
      //  window.location.reload()
    }
  }, [dispatch, error, isAuthenticated]);

  return (
    <Box className="Login_Main">
      <Box className="Login_Container">
        {loading ? <Loader /> : ""}

        <Card className="Login_Card_Container">
          <h1 className="Login_Heading"> Siddham</h1>

          <h3 className="Login_Sub_Heading">Login To Siddham</h3>
          <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={checkoutSchema}
          >
            {({
              values,
              errors,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit}>
                <Box
                  display="grid"
                  gap="30px"
                  gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                  sx={{
                    "& > div": {
                      gridColumn: isNonMobile ? undefined : "span 4",
                    },
                  }}
                >
                  <TextField
                    fullWidth
                    variant="filled"
                    type="text"
                    label="Email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    name="email"
                    error={!!touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
                    sx={{ gridColumn: "span 4" }}
                  />

                  <TextField
                    fullWidth
                    variant="filled"
                    type="password"
                    label="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.password}
                    name="password"
                    error={!!touched.password && !!errors.password}
                    helperText={touched.password && errors.password}
                    sx={{ gridColumn: "span 4" }}
                  />
                </Box>
                <Box display="flex" justifyContent="end" mt="20px">
                  <Button
                    type="submit"
                    sx={{
                      backgroundColor: "rgba(101,155,174,0.8)",
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "15px",
                    }}
                    fullWidth
                    variant="contained"
                  >
                    Login
                  </Button>
                </Box>
                <Box display="flex" justifyContent="space-between" mt="20px">
                  <h3 className="Login_Create">
                    <NavLink
                      to="/register"
                      style={{
                        textDecoration: "none",
                        color: "#3a3c3e",
                      }}
                    >
                      Create a New Account?
                    </NavLink>{" "}
                  </h3>

                  <h3 className="Login_Forgot"> Forgot Password</h3>
                </Box>
              </form>
            )}
          </Formik>
        </Card>
      </Box>
    </Box>
  );
};

export default Login;
