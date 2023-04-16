import {
  LOGIN_REQUEST_DATA,
  LOGIN_SUCCESS_DATA,
  LOGIN_FAILURE_DATA,
  LOAD_USER_FAILURE,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  REGISTER_REQUEST_DATA,
  REGISTER_FAILURE_DATA,
  REGISTER_SUCCESS_DATA,
  CLEAR_ERRORS,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from "./actionTypes";
import axios from "axios";
import Cookies from "js-cookie";

// LOGIN

const LoginFun =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      dispatch({ type: LOGIN_REQUEST_DATA });

      const { data } = await axios.post("http://127.0.0.1:8000/auth/login3/", {
        email,
        password,
      });

      dispatch({ type: LOGIN_SUCCESS_DATA, payload: data });
    } catch (error) {
      console.log({
        type: LOGIN_FAILURE_DATA,
        payload: error.response.data.message,
      });
    }
  };

// REGISTER
const RegisterFun = (userData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_REQUEST_DATA });

    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const { data } = await axios.post(
      `http://127.0.0.1:8000/auth/register/`,
      userData,
      config
    );

    dispatch({ type: REGISTER_SUCCESS_DATA, payload: data.user });
  } catch (error) {
    dispatch({
      type: REGISTER_FAILURE_DATA,
      payload: error.response.data.message,
    });
  }
};

// LOAD USERS

const LoadUserFun = () => async (dispatch) => {
  const access_token_cookies = Cookies.get("jwttokencelaccess") || "";
  try {
    dispatch({ type: LOAD_USER_REQUEST });

    const { data } = await axios.get("http://127.0.0.1:8000/auth/self/", {
      headers: {
        Authorization: `Bearer ${access_token_cookies}`,
      },
    });

    dispatch({ type: LOAD_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LOAD_USER_FAILURE, payload: error.response });
  }
};

// LOGOUT USER
const LogoutFun = () => async (dispatch) => {
  const refresh_token_cookies = Cookies.get("jwttokencelrefresh") || "";
  try {
    const { data } = await axios.post("http://127.0.0.1:8000/auth/logout/", {
      refresh_token: `${refresh_token_cookies}`,
    });

    dispatch({ type: LOGOUT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LOGOUT_FAILURE, payload: error.response });
  }
};

// CLEAR ERRORS
const ClearErrorsFun = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};

export { LoginFun, ClearErrorsFun, LoadUserFun, RegisterFun, LogoutFun };
