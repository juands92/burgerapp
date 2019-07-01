import * as actionTypes from "./actionsTypes";
import axios from "../../axios-order";

export const addIngredient = name => {
  return {
    type: actionTypes.ADD_INGREDIENTS,
    ingredientName: name
  };
};

export const removeIngredient = name => {
  return {
    type: actionTypes.REMOVE_INGREDIENTS,
    ingredientName: name
  };
};

export const setIngredients = ingredients => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    //ingredients: ingredients
    ingredients: ingredients
  };
};

export const setErrors = errors => {
  return {
    type: actionTypes.SET_ERRORS,
    error: errors
  };
};

export const initIngredients = () => {
  return dispatch => {
    axios
      .get("https://react-my-burguer-a4715.firebaseio.com/ingredients.json")
      .then(response => {
        dispatch(setIngredients(response.data));
      })
      .catch(error => {
        dispatch(setErrors(error.message));
      });
  };
};
