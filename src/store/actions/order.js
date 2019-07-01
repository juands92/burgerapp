import * as actionTypes from "./actionsTypes";
import axios from "../../axios-order";

export const purchaseBurguerSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGUER,
    orderId: id,
    orderData
  };
};

export const setErrors = errors => {
  return {
    type: actionTypes.SET_ERRORS,
    error: errors
  };
};

export const purchaseBurguerStart = () => {
  return {
    type: actionTypes.PURCHASE_BURGUER_START
  };
};

export const purchaseBurguer = orderData => {
  return dispatch => {
    dispatch(purchaseBurguerStart());
    axios
      .post("/orders.json", orderData)
      .then(response => {
        dispatch(purchaseBurguerSuccess(response.data, orderData));
      })
      .catch(error => {
        dispatch(setErrors(error.message));
      });
  };
};

export const purcahseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT
  };
};

export const fetchOrdersSuccess = orders => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders: orders
  };
};

export const fetchOrdersStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START
  };
};

export const fetchOrders = () => {
  return dispatch => {
    dispatch(fetchOrdersStart());
    axios
      .get("/orders.json")
      .then(res => {
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key
          });
        }
        dispatch(fetchOrdersSuccess(fetchedOrders));
      })
      .catch(error => {
        dispatch(setErrors(error.message));
      });
  };
};
