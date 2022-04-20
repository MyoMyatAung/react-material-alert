import { ADD_ALERT, REMOVE_ALERT } from "../action_types";

const initail_state = []

export const AlertReducer = (state = initail_state, action) => {
  
  switch (action.type) {
    case ADD_ALERT:
      return [...state, action.payload];

    case REMOVE_ALERT:
      const index = state.findIndex((e) => e.id === action.payload);
      const alerts = [...state];
      alerts.splice(index,1);
      return alerts;

    default:
      return state;
  }
};
