import * as types from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  GawaliorImageData: [],
  GawaliorImageSearchData: [],
  EranImageData: [],
  EranImageSearchData: [],
  EranImageDataDetails: [],
  AdvancedSearchData: [],
  BnawalImageData: [],
  BhirranaImageData: [],
  ChanhujoDaroImageData: [],
  BNGLImageData: [],
};

const ApplicationReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    //-------------------------Gawalior Data----------------------------------------

    case types.GWALIOR_IMAGE_DATA_REQUEST:
      return { ...state, isLoading: true };
    case types.GWALIOR_IMAGE_DATA_SUCCESS:
      return { ...state, isLoading: false, GawaliorImageData: payload };
    case types.GWALIOR_IMAGE_DATA_FAILURE:
      return { ...state, isError: true, isLoading: false };

    // ----------------------Eran Data---------------------------------

    case types.ERAN_IMAGE_DATA_REQUEST:
      return { ...state, isLoading: true };
    case types.ERAN_IMAGE_DATA_SUCCESS:
      return { ...state, isLoading: false, EranImageData: payload };
    case types.ERAN_IMAGE_DATA_FAILURE:
      return { ...state, isError: true, isLoading: false };

    //------------------Bnawali Data---------------------------

    case types.BNAWALI_IMAGE_DATA_REQUEST:
      return { ...state, isLoading: true };
    case types.BNAWALI_IMAGE_DATA_SUCCESS:
      return { ...state, isLoading: false, BnawalImageData: payload };
    case types.BNAWALI_IMAGE_DATA_FAILURE:
      return { ...state, isError: true, isLoading: false };

    //------------------Bhirrana Data---------------------------

    case types.BHIRRANA_IMAGE_DATA_REQUEST:
      return { ...state, isLoading: true };
    case types.BHIRRANA_IMAGE_DATA_SUCCESS:
      return { ...state, isLoading: false, BhirranaImageData: payload };
    case types.BHIRRANA_IMAGE_DATA_FAILURE:
      return { ...state, isError: true, isLoading: false };

    //------------------Chanhujo-daro Data---------------------------

    case types.CHANHUJO_DARO_IMAGE_DATA_REQUEST:
      return { ...state, isLoading: true };
    case types.CHANHUJO_DARO_IMAGE_DATA_SUCCESS:
      return { ...state, isLoading: false, ChanhujoDaroImageData: payload };
    case types.CHANHUJO_DARO_IMAGE_DATA_FAILURE:
      return { ...state, isError: true, isLoading: false };

    //------------------Bngl Data---------------------------

    case types.BNGL_IMAGE_DATA_REQUEST:
      return { ...state, isLoading: true };
    case types.BNGL_IMAGE_DATA_SUCCESS:
      return { ...state, isLoading: false, BNGLImageData: payload };
    case types.BNGL_IMAGE_DATA_FAILURE:
      return { ...state, isError: true, isLoading: false };

    //--------------------Eran Search Data-------------------------

    case types.ERAN_IMAGE_SEARCH_DATA_REQUEST:
      return { ...state, isLoading: true };
    case types.ERAN_IMAGE_SEARCH_DATA_SUCCESS:
      return { ...state, isLoading: false, EranImageSearchData: payload };
    case types.ERAN_IMAGE_SEARCH_DATA_FAILURE:
      return { ...state, isError: true, isLoading: false };

    //-------------------Eran Data Details--------------------

    case types.ERAN_IMAGE_DATA_DETAILS_REQUEST:
      return { ...state, isLoading: true };
    case types.ERAN_IMAGE_DATA_DETAILS_SUCCESS:
      return { ...state, isLoading: false, EranImageDataDetails: payload };
    case types.ERAN_IMAGE_DATA_DETAILS_FAILURE:
      return { ...state, isError: true, isLoading: false };

    //-----------------------Advanced Search------------------

    case types.ADVANCED_SEARCH_REQUEST:
      return { ...state, isLoading: true };
    case types.ADVANCED_SEARCH_SUCCESS:
      return { ...state, isLoading: false, AdvancedSearchData: payload };
    case types.ADVANCED_SEARCH_FAILURE:
      return { ...state, isError: true, isLoading: false };

    default:
      return state;
  }
};

export default ApplicationReducer;
