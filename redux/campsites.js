import * as ActionTypes from "./ActionTypes";

export const campsites = (
  state = { isLoading: true, errorMessage: null, ccampsites: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_CAMPSITES:
      return {
        ...state,
        isLoading: false,
        errorMessage: null,
        campsites: action.payload,
      };
    case ActionTypes.CAMPSITES_LOADING:
      return { ...state, isLoading: true, errorMessage: null, campsites: [] };
    case ActionTypes.CAMPSITES_FAILED:
      return { ...state, isLoading: false, errorMessage: action.payload };
    default:
      return state;
  }
};
