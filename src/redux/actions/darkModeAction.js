import { DARK_MODE } from "../constants/actionTypes";

export const darkMode = (event) => async (dispatch) => {
  localStorage.setItem("darkMode", event);

  dispatch({
    type: DARK_MODE,
    payload: event,
  });
};
