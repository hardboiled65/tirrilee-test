import { ADD_PRICE, SET_SERVICE_TYPE_PRICE } from '../constants/action-types'

export function addPrice(payload) {
  return { type: ADD_PRICE, payload };
}

export function setServiceTypePrice(payload) {
  return { type: SET_SERVICE_TYPE_PRICE, payload };
}

