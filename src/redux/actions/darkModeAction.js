import { DARK_MODE } from "../constants/actionTypes";

export const darkMode = (e) => async (dispatch) => {
  localStorage.setItem("darkMode", e);

  dispatch({
    type: DARK_MODE,
    payload: e,
  });
};
