import {
  ADD_PRICE,
  SET_SERVICE_TYPE_PRICE,
  SET_DETAIL_PLAN_PRICE,
  SET_DESIGN_PRICE,
  SET_PAGE_MULTIPLE,
  SET_ADDITIONAL_FEATURES,
  SET_ADMIN,
} from '../constants/action-types'

const initialState = {
  price: 0,
  serviceTypePrice: 0,
  detailPlanPrice: 0,
  designPrice: 0,
  pageMultiple: 0,
  additionalFeatures: {
    gps: false,
    map: false,
    kakaoPush: false,
    community: false,
    share: false,
    userTypeExpand: false,
    chat: false,
    none: false,
  },
  admin: {
    inService: false,
    defaultAdmin: false,
    extendedAdmin: false,
    none: false,
  }
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRICE:
      return {
        price: state.price + action.payload,
      };
    case SET_SERVICE_TYPE_PRICE:
      return Object.assign({}, state, {
        serviceTypePrice: action.payload,
      });
    case SET_DETAIL_PLAN_PRICE:
      return Object.assign({}, state, {
        detailPlanPrice: action.payload,
      });
    case SET_DESIGN_PRICE:
      return Object.assign({}, state, {
        designPrice: action.payload,
      });
    case SET_PAGE_MULTIPLE:
      return Object.assign({}, state, {
        pageMultiple: action.payload,
      });
    case SET_ADDITIONAL_FEATURES:
      return Object.assign({}, state, {
        additionalFeatures: action.payload,
      });
    case SET_ADMIN:
      return state;
    default:
      break;
  }
  return state;
};

export default rootReducer

