import shortid from "shortid";
import { ADD_ALERT, REMOVE_ALERT } from "../action_types";

export const action_add_alert = (
  alertTitle = "",
  text = "",
  link = "",
  timeLimit = 10,
  alertType = "success"
) => {
  return {
    type: ADD_ALERT,
    payload: {
      id: shortid.generate(),
      alertTitle,
      text,
      link,
      timeLimit,
      alertType,
    },
  };
};

export const action_remove_alert = (id) => {
  return {
    type: REMOVE_ALERT,
    payload: id,
  };
};
