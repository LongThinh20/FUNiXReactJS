import { DISHES } from "../shared/dishes";
import * as ActionsType from "./ActionTypes";

export const addComment = (dishId, rating, author, comment) => ({
  type: ActionsType.ADD_COMMENT,
  payload: {
    dishId,
    rating,
    author,
    comment
  }
});

export const fetchDishes = () => (dispatch) => {
  dispatch(dishesLoading(true));

  setTimeout(() => dispatch(addDishes(DISHES)), 2000);
};

export const dishesLoading = () => ({
  type: ActionsType.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
  type: ActionsType.DISHES_FAILED,
  payload: errmess
});

export const addDishes = (dishes) => ({
  type: ActionsType.ADD_DISHES,
  payload: dishes
});
