import ContactTypes from "./contact.types";

const INITIAL_STATE = {
  contactMessage: null,
};

const contactReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ContactTypes.CONTACT_MESSAGE_START:
      return {
        ...state,
        contactMessage: action.payload,
        error: null,
      };

    case ContactTypes.CONTACT_MESSAGE_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case ContactTypes.CONTACT_MESSAGE_SUCCESS:
      return {
        ...state,
        contactMessage: null,
        error: null,
      };
    default:
      return state;
  }
};

export default contactReducer;
