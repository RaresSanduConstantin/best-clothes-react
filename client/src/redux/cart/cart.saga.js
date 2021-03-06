import { takeLatest, put, all, call } from "redux-saga/effects";
import UserActionTypes from "../user/user.types";
import { clearCart } from "./cart.action";

export function* clearCartSingOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartSingOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
