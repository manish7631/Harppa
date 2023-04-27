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
  DholaviraImageData: [],
  FarmanaImageData: [],
  HarappaImageData: [],
  KalibanganImageData: [],
  KanmerImageData: [],
  KhirsaraImageData: [],
  LothalImageData: [],
  MohenjoDaroImageData: [],
  RakhigarhiImageData: [],
  BNGLImageData: [],
  IMPLImageData: [],
  MISCImageData: [],
  POTImageData: [],
  RODImageData: [],
  SEALImageData: [],
  TABImageData: [],
  TAGImageData: [],
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

    //------------------Dholavira Data---------------------------

    case types.DHOLAVIRA_IMAGE_DATA_REQUEST:
      return { ...state, isLoading: true };
    case types.DHOLAVIRA_IMAGE_DATA_SUCCESS:
      return { ...state, isLoading: false, DholaviraImageData: payload };
    case types.DHOLAVIRA_IMAGE_DATA_FAILURE:
      return { ...state, isError: true, isLoading: false };

    //------------------Farmana Data---------------------------

    case types.FARMANA_IMAGE_DATA_REQUEST:
      return { ...state, isLoading: true };
    case types.FARMANA_IMAGE_DATA_SUCCESS:
      return { ...state, isLoading: false, FarmanaImageData: payload };
    case types.FARMANA_IMAGE_DATA_FAILURE:
      return { ...state, isError: true, isLoading: false };

    //------------------Harappa Data---------------------------

    case types.HARAPPA_IMAGE_DATA_REQUEST:
      return { ...state, isLoading: true };
    case types.HARAPPA_IMAGE_DATA_SUCCESS:
      return { ...state, isLoading: false, HarappaImageData: payload };
    case types.HARAPPA_IMAGE_DATA_FAILURE:
      return { ...state, isError: true, isLoading: false };

    //------------------Kalibangan Data---------------------------

    case types.KALIBANGAN_IMAGE_DATA_REQUEST:
      return { ...state, isLoading: true };
    case types.KALIBANGAN_IMAGE_DATA_SUCCESS:
      return { ...state, isLoading: false, KalibanganImageData: payload };
    case types.KALIBANGAN_IMAGE_DATA_FAILURE:
      return { ...state, isError: true, isLoading: false };

    //------------------Kanmer Data---------------------------

    case types.KANMER_IMAGE_DATA_REQUEST:
      return { ...state, isLoading: true };
    case types.KANMER_IMAGE_DATA_SUCCESS:
      return { ...state, isLoading: false, KanmerImageData: payload };
    case types.KANMER_IMAGE_DATA_FAILURE:
      return { ...state, isError: true, isLoading: false };

    //------------------Khirsara Data---------------------------

    case types.KHIRSARA_IMAGE_DATA_REQUEST:
      return { ...state, isLoading: true };
    case types.KHIRSARA_IMAGE_DATA_SUCCESS:
      return { ...state, isLoading: false, KhirsaraImageData: payload };
    case types.KHIRSARA_IMAGE_DATA_FAILURE:
      return { ...state, isError: true, isLoading: false };

    //------------------Lothal Data---------------------------

    case types.LOTHAL_IMAGE_DATA_REQUEST:
      return { ...state, isLoading: true };
    case types.LOTHAL_IMAGE_DATA_SUCCESS:
      return { ...state, isLoading: false, LothalImageData: payload };
    case types.LOTHAL_IMAGE_DATA_FAILURE:
      return { ...state, isError: true, isLoading: false };

    //------------------Mohenjo-daro Data---------------------------

    case types.MOHENJO_DARO_IMAGE_DATA_REQUEST:
      return { ...state, isLoading: true };
    case types.MOHENJO_DARO_IMAGE_DATA_SUCCESS:
      return { ...state, isLoading: false, MohenjoDaroImageData: payload };
    case types.MOHENJO_DARO_IMAGE_DATA_FAILURE:
      return { ...state, isError: true, isLoading: false };

    //------------------Rakhigarhi Data---------------------------

    case types.RAKHIGARHI_IMAGE_DATA_REQUEST:
      return { ...state, isLoading: true };
    case types.RAKHIGARHI_IMAGE_DATA_SUCCESS:
      return { ...state, isLoading: false, RakhigarhiImageData: payload };
    case types.RAKHIGARHI_IMAGE_DATA_FAILURE:
      return { ...state, isError: true, isLoading: false };

    //------------------Bngl Data---------------------------

    case types.BNGL_IMAGE_DATA_REQUEST:
      return { ...state, isLoading: true };
    case types.BNGL_IMAGE_DATA_SUCCESS:
      return { ...state, isLoading: false, BNGLImageData: payload };
    case types.BNGL_IMAGE_DATA_FAILURE:
      return { ...state, isError: true, isLoading: false };

    //------------------Impl Data---------------------------

    case types.IMPL_IMAGE_DATA_REQUEST:
      return { ...state, isLoading: true };
    case types.IMPL_IMAGE_DATA_SUCCESS:
      return { ...state, isLoading: false, IMPLImageData: payload };
    case types.IMPL_IMAGE_DATA_FAILURE:
      return { ...state, isError: true, isLoading: false };

    //------------------MISC Data---------------------------

    case types.MISC_IMAGE_DATA_REQUEST:
      return { ...state, isLoading: true };
    case types.MISC_IMAGE_DATA_SUCCESS:
      return { ...state, isLoading: false, MISCImageData: payload };
    case types.MISC_IMAGE_DATA_FAILURE:
      return { ...state, isError: true, isLoading: false };

    //------------------POT Data---------------------------

    case types.POT_IMAGE_DATA_REQUEST:
      return { ...state, isLoading: true };
    case types.POT_IMAGE_DATA_SUCCESS:
      return { ...state, isLoading: false, POTImageData: payload };
    case types.POT_IMAGE_DATA_FAILURE:
      return { ...state, isError: true, isLoading: false };

    //------------------ROD Data---------------------------

    case types.ROD_IMAGE_DATA_REQUEST:
      return { ...state, isLoading: true };
    case types.ROD_IMAGE_DATA_SUCCESS:
      return { ...state, isLoading: false, RODImageData: payload };
    case types.ROD_IMAGE_DATA_FAILURE:
      return { ...state, isError: true, isLoading: false };

    //------------------SEAL Data---------------------------

    case types.SEAL_IMAGE_DATA_REQUEST:
      return { ...state, isLoading: true };
    case types.SEAL_IMAGE_DATA_SUCCESS:
      return { ...state, isLoading: false, SEALImageData: payload };
    case types.SEAL_IMAGE_DATA_FAILURE:
      return { ...state, isError: true, isLoading: false };

    //------------------TAG Data---------------------------

    case types.TAG_IMAGE_DATA_REQUEST:
      return { ...state, isLoading: true };
    case types.TAG_IMAGE_DATA_SUCCESS:
      return { ...state, isLoading: false, TAGImageData: payload };
    case types.TAG_IMAGE_DATA_FAILURE:
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
