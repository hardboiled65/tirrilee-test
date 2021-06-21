import {
  ADD_PRICE,
  SET_SERVICE_TYPE_PRICE,
  SET_DETAIL_PLAN_PRICE,
  SET_DESIGN_PRICE,
  SET_PAGE_MULTIPLE,
  SET_ADDITIONAL_FEATURES,
  SET_ADMIN,
} from '../constants/action-types'

export function addPrice(payload) {
  return { type: ADD_PRICE, payload };
}

export function setServiceTypePrice(payload) {
  return { type: SET_SERVICE_TYPE_PRICE, payload };
}

export function setDetailPlanPrice(payload) {
  return { type: SET_DETAIL_PLAN_PRICE, payload };
}

export function setDesignPrice(payload) {
  return { type: SET_DESIGN_PRICE, payload };
}

export function setPageMultiple(payload) {
  return { type: SET_PAGE_MULTIPLE, payload };
}

export function setAdditionalFeatures(payload) {
  return { type: SET_ADDITIONAL_FEATURES, payload };
}

export function setAdmin(payload) {
  return { type: SET_ADMIN, payload };
}
