import * as types from "./actionTypes";
import axios from "axios";
import { Backend_Url } from "../../utils/constant";

//------------------------------Gawalior Data---------------------------------

const GawaliorImageGetFunction = (params) => (dispatch) => {
  dispatch({ type: types.GWALIOR_IMAGE_DATA_REQUEST });
  axios
    .get(`${Backend_Url}/ivc/signary/`)
    .then((r) =>
      dispatch({
        type: types.GWALIOR_IMAGE_DATA_SUCCESS,
        payload: r.data,
      })
    )
    .catch((e) => dispatch({ type: types.GWALIOR_IMAGE_DATA_FAILURE }));
};

//--------------------------------Bnawali Data --------------------------------------

const BnawaliImageGetFunction = () => (dispatch) => {
  dispatch({ type: types.BNAWALI_IMAGE_DATA_REQUEST });
  axios
    .get(`${Backend_Url}/ivc/seq/?search=Banawali`)
    .then((r) =>
      dispatch({
        type: types.BNAWALI_IMAGE_DATA_SUCCESS,
        payload: r.data,
      })
    )
    .catch((e) => dispatch({ type: types.BNAWALI_IMAGE_DATA_FAILURE }));
};

//-------------------------------Bhirrana Data--------------------------------------------

const BhirranaImageGetFunction = () => (dispatch) => {
  dispatch({ type: types.BHIRRANA_IMAGE_DATA_REQUEST });
  axios
    .get(`${Backend_Url}/ivc/seq/?search=Bhirrana`)
    .then((r) =>
      dispatch({
        type: types.BHIRRANA_IMAGE_DATA_SUCCESS,
        payload: r.data,
      })
    )
    .catch((e) => dispatch({ type: types.BHIRRANA_IMAGE_DATA_FAILURE }));
};

//-------------------------------Chanhujo-daro Data--------------------------------------------

const ChanhujoDaroImageGetFunction = () => (dispatch) => {
  dispatch({ type: types.CHANHUJO_DARO_IMAGE_DATA_REQUEST });
  axios
    .get(`${Backend_Url}/ivc/seq/?search=Chanhujo-daro`)
    .then((r) =>
      dispatch({
        type: types.CHANHUJO_DARO_IMAGE_DATA_SUCCESS,
        payload: r.data,
      })
    )
    .catch((e) => dispatch({ type: types.CHANHUJO_DARO_IMAGE_DATA_FAILURE }));
};

//-------------------------------BNGL Data--------------------------------------------

const BNGLImageGetFunction = () => (dispatch) => {
  dispatch({ type: types.BNGL_IMAGE_DATA_REQUEST });
  axios
    .get(`${Backend_Url}/ivc/seq/?search=BNGL`)
    .then((r) =>
      dispatch({
        type: types.BNGL_IMAGE_DATA_SUCCESS,
        payload: r.data,
      })
    )
    .catch((e) => dispatch({ type: types.BNGL_IMAGE_DATA_FAILURE }));
};

// --------------------------------Eran Data------------------------------------------

const EranImageGetFunction = (params) => (dispatch) => {
  dispatch({ type: types.ERAN_IMAGE_DATA_REQUEST });
  axios
    .get(`${Backend_Url}/ivc/seq/`)
    // axios.get(`Backend_Url/ivc/seq/?search=Alamgirpur`)
    .then((r) =>
      dispatch({
        type: types.ERAN_IMAGE_DATA_SUCCESS,
        payload: r.data,
      })
    )
    .catch((e) => dispatch({ type: types.ERAN_IMAGE_DATA_FAILURE }));
};

//---------------------------------Eran Data Search------------------------------------

const EranSearchImageGetFunction = (query) => (dispatch) => {
  dispatch({ type: types.ERAN_IMAGE_SEARCH_DATA_REQUEST });
  axios
    .get(`${Backend_Url}/ivc/seq/?search=${query}`)
    .then((r) =>
      dispatch({
        type: types.ERAN_IMAGE_SEARCH_DATA_SUCCESS,
        payload: r.data,
      })
    )
    .catch((e) => dispatch({ type: types.ERAN_IMAGE_SEARCH_DATA_FAILURE }));
};

//---------------------------------Eran Data Search------------------------------------

const EranImageDetailsGetFunction = (EranId) => (dispatch) => {
  dispatch({ type: types.ERAN_IMAGE_DATA_DETAILS_REQUEST });
  axios
    .get(`${Backend_Url}/ivc/seq/${EranId}/`)
    .then((r) =>
      dispatch({
        type: types.ERAN_IMAGE_DATA_DETAILS_SUCCESS,
        payload: r.data,
      })
    )
    .catch((e) => dispatch({ type: types.ERAN_IMAGE_DATA_DETAILS_FAILURE }));
};

//------------------------------Advanced Search------------------------------

const AdvancedSearchFunction =
  ({ site, field_symbol, material_type }) =>
  (dispatch) => {
    let NewUrl = new URL(`${Backend_Url}/ivc/seq/`);

    if (site) {
      NewUrl.searchParams.append("site", site);
    }

    if (field_symbol) {
      NewUrl.searchParams.append("field_symbol", field_symbol);
    }

    if (material_type) {
      NewUrl.searchParams.append("material_type", material_type);
    }
    dispatch({ type: types.ADVANCED_SEARCH_REQUEST });
    axios
      .get(`${NewUrl.href}`)
      .then((r) =>
        dispatch({
          type: types.ADVANCED_SEARCH_SUCCESS,
          payload: r.data,
        })
      )
      .catch((e) => dispatch({ type: types.ADVANCED_SEARCH_FAILURE }));
  };

export {
  GawaliorImageGetFunction,
  EranImageGetFunction,
  EranSearchImageGetFunction,
  EranImageDetailsGetFunction,
  AdvancedSearchFunction,
  BnawaliImageGetFunction,
  BhirranaImageGetFunction,
  ChanhujoDaroImageGetFunction,
  BNGLImageGetFunction,
};
