import { ADD_PRICE, SET_SERVICE_TYPE_PRICE } from '../constants/action-types'

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
      return {
        serviceTypePrice: action.payload,
      };
    default:
      break;
  }
  return state;
};

export default rootReducer

