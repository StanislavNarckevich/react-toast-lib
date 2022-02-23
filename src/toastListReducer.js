import { ADD_TOAST, DELETE_TOAST } from './constants';

export const toastListReducer = (state, action) => {
  switch (action.type) {
    case ADD_TOAST:
      return [...state, action.payload];
    case DELETE_TOAST:
      return state.filter((toast) => toast.id !== action.payload);
    default:
      return state;
  }
};
