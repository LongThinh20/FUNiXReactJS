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
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            `Error ${response.status} : ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((dishes) => dispatch(addDishes(dishes)))
    .catch((error) => dispatch(dishesFailed(error.message)));
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
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            `Error ${response.status} : ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((comment) => dispatch(addComments(comment)))
    .catch((error) => dispatch(commentsFailed(error.message)));
};
export const commentsFailed = (errmess) => ({
  type: ActionsType.COMMENTS_FAILED,
  payload: errmess
});

export const addComments = (comments) => ({
  type: ActionsType.ADD_COMMENTS,
  payload: comments
});
//post comment
export const postComment = (dishId, rating, author, comment) => (dispatch) => {
  const newComment = {
    dishId,
    rating,
    author,
    comment
  };
  newComment.date = new Date().toISOString();
  return fetch(baseUrl + "comments", {
    method: "POST",
    body: JSON.stringify(newComment),
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "same-origin"
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            `Error ${response.status} : ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((response) => dispatch(addComment(response)))
    .catch((error) => {
      console.log("PostComment", error.message);
    });
};
//fetch promos
export const fetchPromos = () => (dispatch) => {
  dispatch(dishesLoading(true));

  return fetch(baseUrl + "promotions")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            `Error ${response.status} : ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((promos) => dispatch(addPromos(promos)))
    .catch((error) => dispatch(promosFailed(error.message)));
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
