import {
  ADD_INFORMATION,
  DELETE_INFORMATION,
  EDIT_INFORMATION,
} from "../actiontype/actiontype";


export const addInformation = (data) => {
  return {
    type: ADD_INFORMATION,
    payload: data,
    info: "action performing to add data",
  };
};

export const deleteInfo = (data) => {
  return {
    type: DELETE_INFORMATION,
    payload: data,
    info: "action performing to delete data",
  };
};

export const editInformation = (data) => {
  return {
    type: EDIT_INFORMATION,
    payload: data,
    info: "action performing to edit data",
  };
};
