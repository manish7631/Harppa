import {
  LOGIN_REQUEST_DATA,
  LOGIN_SUCCESS_DATA,
  LOGIN_FAILURE_DATA,
  CLEAR_ERRORS,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILURE,
  REGISTER_REQUEST_DATA,
  REGISTER_SUCCESS_DATA,
  REGISTER_FAILURE_DATA,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from "./actionTypes";
import Cokkies from "js-cookie";
export const AuthReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case LOGIN_REQUEST_DATA:
      return {
        loading: true,
        isAuthenticated: false,
      };
    case LOGIN_SUCCESS_DATA:
      Cokkies.set("jwttokencelaccess", action.payload.access);
      Cokkies.set("jwttokencelrefresh", action.payload.refresh);
      // localStorage.setItem("jwttokencelaccess", action.payload.access)
      // localStorage.setItem("jwttokencelrefresh", action.payload.refresh);

      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };

    case LOGIN_FAILURE_DATA:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };

    case REGISTER_REQUEST_DATA:
      return {
        loading: true,
        isAuthenticatedRegister: false,
      };

    case REGISTER_SUCCESS_DATA:
      return {
        ...state,
        loading: false,
        isAuthenticatedRegister: true,
        user: action.payload,
      };
    case REGISTER_FAILURE_DATA:
      return {
        ...state,
        loading: false,
        isAuthenticatedRegister: false,
        user: null,
        error: action.payload,
      };

    case LOAD_USER_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      };

    case LOAD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };
    case LOAD_USER_FAILURE:
      return {
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };

    case LOGOUT_SUCCESS:
      Cokkies.remove("jwttokencelaccess");
      Cokkies.remove("jwttokencelrefresh");

      console.log("Successfully Logout");
      return {
        loading: false,
        user: null,
        isAuthenticated: false,
      };

    case LOGOUT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
