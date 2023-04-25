import { Box, Button, Card, TextField, Typography } from "@mui/material";

import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./Signup.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ClearErrorsFun, RegisterFun } from "../../redux/Auth/action";
import Loader from "../Loader/Loader";
import { useEffect } from "react";

const Signup = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { error, loading, isAuthenticatedRegister } = useSelector(
    (state) => state.AuthReducer
  );

  const handleFormSubmit = (values) => {
    dispatch(RegisterFun(values));
  };

  useEffect(() => {
    if (error) {
      console.log("err", error);
      dispatch(ClearErrorsFun());
    }

    console.log("test", isAuthenticatedRegister);
    if (isAuthenticatedRegister) {
      navigate("/login");
    }
  }, [error, isAuthenticatedRegister]);

  return (
    <Box className="Signup_Main">
      <Box className="Signup_Container">
        {loading ? (
          <Loader />
        ) : (
          <Card className="Signup_Card_Container">
            {/* <h1 className="Signup_Heading"> Siddham</h1> */}
            <h3 className="Signup_Sub_Heading"> Please Register </h3>
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
                      label="Name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.name}
                      name="name"
                      error={!!touched.name && !!errors.name}
                      helperText={touched.name && errors.name}
                      sx={{ gridColumn: "span 4" }}
                    />
                    <TextField
                      fullWidth
                      variant="filled"
                      type="text"
                      label="Affiliation"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.affiliation}
                      name="affiliation"
                      error={!!touched.affiliation && !!errors.affiliation}
                      helperText={touched.affiliation && errors.affiliation}
                      sx={{ gridColumn: "span 4" }}
                    />
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
                    <TextField
                      fullWidth
                      variant="filled"
                      type="password"
                      label="confirm password"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.password2}
                      name="password2"
                      error={!!touched.password2 && !!errors.password2}
                      helperText={touched.password2 && errors.password2}
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
                      Register
                    </Button>
                  </Box>
                </form>
              )}
            </Formik>
          </Card>
        )}
      </Box>
    </Box>
  );
};

const checkoutSchema = yup.object().shape({
  name: yup.string().required("required"),
  affiliation: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
  password2: yup
    .string()
    .required("required")
    .oneOf([yup.ref("password"), null], "Passwords must be same"),
});

const initialValues = {
  name: "",
  affiliation: "",
  email: "",
  password: "",
  password2: "",
};

export default Signup;
