import ContactTypes from "./contact.types";

export const contactMessageStart = () => ({
  type: ContactTypes.CONTACT_MESSAGE_START,
});

export const contactMessageSuccess = (contact) => ({
  type: ContactTypes.CONTACT_MESSAGE_SUCCESS,
  payload: contact,
});

export const contactMessageFail = (error) => ({
  type: ContactTypes.CONTACT_MESSAGE_FAIL,
  payload: error,
});
