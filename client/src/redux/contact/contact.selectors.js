import { createSelector } from "reselect";

const selectMessage = (state) => state.contact;

export const selectCurrentUser = createSelector(
  [selectMessage],
  (contact) => contact.contactMessage
);
