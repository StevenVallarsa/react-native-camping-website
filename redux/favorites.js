import * as ActionTypes from "./ActionTypes";

export const favorites = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.ADD_FAVORITE:
      if (state.includes(action.payload)) {
        /*  Instead of just returning state, if the user selected the
         *  favorite button again, this will remove the campground
         *  from the favorites list
         */
        return state.filter((id) => id !== action.payload);
      }
      return state.concat(action.payload);
    case ActionTypes.DELETE_FAVORITE:
      return state.filter((id) => id !== action.payload);
    default:
      return state;
  }
};
