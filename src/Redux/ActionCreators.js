import { DISHES } from "../shared/dishes";
import * as ActionsType from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";

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

  return fetch(baseUrl + "dishes")
    .then((response) => response.json())
    .then((dishes) => dispatch(addDishes(dishes)));
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
//fetch comments
export const fetchComments = () => (dispatch) => {
  dispatch(dishesLoading(true));

  return fetch(baseUrl + "comments")
    .then((response) => response.json())
    .then((comment) => dispatch(addComments(comment)));
};
export const commentsFailed = (errmess) => ({
  type: ActionsType.COMMENTS_FAILED,
  payload: errmess
});

export const addComments = (comments) => ({
  type: ActionsType.ADD_COMMENTS,
  payload: comments
});
//fetch promos
export const fetchPromos = () => (dispatch) => {
  dispatch(dishesLoading(true));

  return fetch(baseUrl + "promotions")
    .then((response) => response.json())
    .then((promos) => dispatch(addPromos(promos)));
};
export const promosLoading = () => ({
  type: ActionsType.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
  type: ActionsType.PROMOS_FAILED,
  payload: errmess
});

export const addPromos = (promos) => ({
  type: ActionsType.ADD_PROMOS,
  payload: promos
});
