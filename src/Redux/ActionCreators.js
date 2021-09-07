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
