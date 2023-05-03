import {
  ADD_INFORMATION,
  DELETE_INFORMATION,
  EDIT_INFORMATION,
} from "../actiontype/actiontype";

const initalstate = {
  allInformation: [],
};

export const inforamtionReducer = (state = initalstate, action) => {
  switch (action.type) {
    case ADD_INFORMATION:
      const Id = state.allInformation.length + 1;

      return {
        allInformation: [
          ...state.allInformation,
          { ...action.payload, id: Id },
        ],
      };

    case DELETE_INFORMATION: {
      state.allInformation.splice(
        state.allInformation.findIndex((elm) => elm.id === action.payload),
        1
      );
      return {
        allInformation: [...state.allInformation],
      };
    }

    case EDIT_INFORMATION: {
      state.allInformation.splice(
        state.allInformation.findIndex((elm) => elm.id === +action.payload.id ),
        1,
        action.payload
      );
      return {
        allInformation: [...state.allInformation],
      };
    }

    default:
      return state;
  }
};
