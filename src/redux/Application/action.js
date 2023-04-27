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

//------------------------------Dholavira Data--------------------------------------------

const DholaviraImageGetFunction = () => (dispatch) => {
  dispatch({ type: types.DHOLAVIRA_IMAGE_DATA_REQUEST });
  axios
    .get(`${Backend_Url}/ivc/seq/?search=Dholavira`)
    .then((r) =>
      dispatch({
        type: types.DHOLAVIRA_IMAGE_DATA_SUCCESS,
        payload: r.data,
      })
    )
    .catch((e) => dispatch({ type: types.DHOLAVIRA_IMAGE_DATA_FAILURE }));
};

//------------------------------Farmana Data--------------------------------------------

const FarmanaImageGetFunction = () => (dispatch) => {
  dispatch({ type: types.FARMANA_IMAGE_DATA_REQUEST });
  axios
    .get(`${Backend_Url}/ivc/seq/?search=Farmana`)
    .then((r) =>
      dispatch({
        type: types.FARMANA_IMAGE_DATA_SUCCESS,
        payload: r.data,
      })
    )
    .catch((e) => dispatch({ type: types.FARMANA_IMAGE_DATA_FAILURE }));
};

//------------------------------Harappa Data--------------------------------------------

const HarappaImageGetFunction = () => (dispatch) => {
  dispatch({ type: types.HARAPPA_IMAGE_DATA_REQUEST });
  axios
    .get(`${Backend_Url}/ivc/seq/?search=Harappa`)
    .then((r) =>
      dispatch({
        type: types.HARAPPA_IMAGE_DATA_SUCCESS,
        payload: r.data,
      })
    )
    .catch((e) => dispatch({ type: types.HARAPPA_IMAGE_DATA_FAILURE }));
};

//------------------------------Kalibangan Data--------------------------------------------

const KalibanganImageGetFunction = () => (dispatch) => {
  dispatch({ type: types.KALIBANGAN_IMAGE_DATA_REQUEST });
  axios
    .get(`${Backend_Url}/ivc/seq/?search=Kalibangan`)
    .then((r) =>
      dispatch({
        type: types.KALIBANGAN_IMAGE_DATA_SUCCESS,
        payload: r.data,
      })
    )
    .catch((e) => dispatch({ type: types.KALIBANGAN_IMAGE_DATA_FAILURE }));
};

//------------------------------Kanmer Data--------------------------------------------

const KanmerImageGetFunction = () => (dispatch) => {
  dispatch({ type: types.KANMER_IMAGE_DATA_REQUEST });
  axios
    .get(`${Backend_Url}/ivc/seq/?search=Kanmer`)
    .then((r) =>
      dispatch({
        type: types.KANMER_IMAGE_DATA_SUCCESS,
        payload: r.data,
      })
    )
    .catch((e) => dispatch({ type: types.KANMER_IMAGE_DATA_FAILURE }));
};

//------------------------------Khirsara Data--------------------------------------------

const KhirsaraImageGetFunction = () => (dispatch) => {
  dispatch({ type: types.KHIRSARA_IMAGE_DATA_REQUEST });
  axios
    .get(`${Backend_Url}/ivc/seq/?search=Khirsara`)
    .then((r) =>
      dispatch({
        type: types.KHIRSARA_IMAGE_DATA_SUCCESS,
        payload: r.data,
      })
    )
    .catch((e) => dispatch({ type: types.KHIRSARA_IMAGE_DATA_FAILURE }));
};

//------------------------------Lothal Data--------------------------------------------

const LothalImageGetFunction = () => (dispatch) => {
  dispatch({ type: types.LOTHAL_IMAGE_DATA_REQUEST });
  axios
    .get(`${Backend_Url}/ivc/seq/?search=Lothal`)
    .then((r) =>
      dispatch({
        type: types.LOTHAL_IMAGE_DATA_SUCCESS,
        payload: r.data,
      })
    )
    .catch((e) => dispatch({ type: types.LOTHAL_IMAGE_DATA_FAILURE }));
};

//------------------------------Mohenjo-daro Data--------------------------------------------

const MohenjoDaroImageGetFunction = () => (dispatch) => {
  dispatch({ type: types.MOHENJO_DARO_IMAGE_DATA_REQUEST });
  axios
    .get(`${Backend_Url}/ivc/seq/?search=Mohenjo-daro`)
    .then((r) =>
      dispatch({
        type: types.MOHENJO_DARO_IMAGE_DATA_SUCCESS,
        payload: r.data,
      })
    )
    .catch((e) => dispatch({ type: types.MOHENJO_DARO_IMAGE_DATA_FAILURE }));
};

//------------------------------Rakhigarhi Data--------------------------------------------

const RakhigarhiImageGetFunction = () => (dispatch) => {
  dispatch({ type: types.RAKHIGARHI_IMAGE_DATA_REQUEST });
  axios
    .get(`${Backend_Url}/ivc/seq/?search=Rakhigarhi`)
    .then((r) =>
      dispatch({
        type: types.RAKHIGARHI_IMAGE_DATA_SUCCESS,
        payload: r.data,
      })
    )
    .catch((e) => dispatch({ type: types.RAKHIGARHI_IMAGE_DATA_FAILURE }));
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

//-------------------------------IMPL Data--------------------------------------------

const IMPLImageGetFunction = () => (dispatch) => {
  dispatch({ type: types.IMPL_IMAGE_DATA_REQUEST });
  axios
    .get(`${Backend_Url}/ivc/seq/?search=IMPL`)
    .then((r) =>
      dispatch({
        type: types.IMPL_IMAGE_DATA_SUCCESS,
        payload: r.data,
      })
    )
    .catch((e) => dispatch({ type: types.IMPL_IMAGE_DATA_FAILURE }));
};

//-------------------------------MISC Data--------------------------------------------

const MISCImageGetFunction = () => (dispatch) => {
  dispatch({ type: types.MISC_IMAGE_DATA_REQUEST });
  axios
    .get(`${Backend_Url}/ivc/seq/?search=MISC`)
    .then((r) =>
      dispatch({
        type: types.MISC_IMAGE_DATA_SUCCESS,
        payload: r.data,
      })
    )
    .catch((e) => dispatch({ type: types.MISC_IMAGE_DATA_FAILURE }));
};

//-------------------------------POT Data--------------------------------------------

const POTImageGetFunction = () => (dispatch) => {
  dispatch({ type: types.POT_IMAGE_DATA_REQUEST });
  axios
    .get(`${Backend_Url}/ivc/seq/?search=POT`)
    .then((r) =>
      dispatch({
        type: types.POT_IMAGE_DATA_SUCCESS,
        payload: r.data,
      })
    )
    .catch((e) => dispatch({ type: types.POT_IMAGE_DATA_FAILURE }));
};

//-------------------------------ROD Data--------------------------------------------

const RODImageGetFunction = () => (dispatch) => {
  dispatch({ type: types.ROD_IMAGE_DATA_REQUEST });
  axios
    .get(`${Backend_Url}/ivc/seq/?search=ROD`)
    .then((r) =>
      dispatch({
        type: types.ROD_IMAGE_DATA_SUCCESS,
        payload: r.data,
      })
    )
    .catch((e) => dispatch({ type: types.ROD_IMAGE_DATA_FAILURE }));
};

//-------------------------------SEAL Data--------------------------------------------

const SEALImageGetFunction = () => (dispatch) => {
  dispatch({ type: types.SEAL_IMAGE_DATA_REQUEST });
  axios
    .get(`${Backend_Url}/ivc/seq/?search=SEAL`)
    .then((r) =>
      dispatch({
        type: types.SEAL_IMAGE_DATA_SUCCESS,
        payload: r.data,
      })
    )
    .catch((e) => dispatch({ type: types.SEAL_IMAGE_DATA_FAILURE }));
};

//-------------------------------TAB Data--------------------------------------------

const TABImageGetFunction = () => (dispatch) => {
  dispatch({ type: types.TAB_IMAGE_DATA_REQUEST });
  axios
    .get(`${Backend_Url}/ivc/seq/?search=TAB`)
    .then((r) =>
      dispatch({
        type: types.TAB_IMAGE_DATA_SUCCESS,
        payload: r.data,
      })
    )
    .catch((e) => dispatch({ type: types.TAB_IMAGE_DATA_FAILURE }));
};

//-------------------------------TAG Data--------------------------------------------

const TAGImageGetFunction = () => (dispatch) => {
  dispatch({ type: types.TAG_IMAGE_DATA_REQUEST });
  axios
    .get(`${Backend_Url}/ivc/seq/?search=TAG`)
    .then((r) =>
      dispatch({
        type: types.TAG_IMAGE_DATA_SUCCESS,
        payload: r.data,
      })
    )
    .catch((e) => dispatch({ type: types.TAG_IMAGE_DATA_FAILURE }));
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
  DholaviraImageGetFunction,
  FarmanaImageGetFunction,
  HarappaImageGetFunction,
  KalibanganImageGetFunction,
  KanmerImageGetFunction,
  KhirsaraImageGetFunction,
  LothalImageGetFunction,
  MohenjoDaroImageGetFunction,
  RakhigarhiImageGetFunction,
  BNGLImageGetFunction,
  IMPLImageGetFunction,
  MISCImageGetFunction,
  POTImageGetFunction,
  RODImageGetFunction,
  SEALImageGetFunction,
  TABImageGetFunction,
  TAGImageGetFunction,
};
