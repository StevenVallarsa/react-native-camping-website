import * as ActionTypes from "./ActionTypes";

export const partners = (
  state = {
    isLoading: true,
    errorMessage: null,
    partners: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_PARTNERS:
      return {
        ...state,
        isLoading: false,
        errorMessage: null,
        partners: action.payload,
      };

    case ActionTypes.PARTNERS_LOADING:
      return { ...state, isLoading: true, errorMessage: null, partners: [] };

    case ActionTypes.PARTNERS_FAILED:
      return { ...state, isLoading: false, errorMessage: action.payload };

    default:
      return state;
  }
};
