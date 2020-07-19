import { call, put, takeEvery, all } from "redux-saga/effects";
import { getStoryId, getStoryData } from "../services/apis";
import {
  LOAD_STORY_LIST_ID,
  FETCH_STORY_DETAIL,
  FETCH_STORY_ID,
  LOAD_STORY_DETAIL,
} from "../constants/index";

export function* fetchStoryIdsList() {
  const data = yield call(getStoryId);
  yield put({ type: FETCH_STORY_ID, storyIdList: data });
}
// function getDetails
export function* fetchStoryIdsData(action) {
  const data = yield call(getStoryData, action.payLoad);
  yield put({ type: FETCH_STORY_DETAIL, storyDetails: data });
}

// export function* updateStore

export function* loadStoryList() {
  yield takeEvery(LOAD_STORY_LIST_ID, fetchStoryIdsList);
//   yield takeEvery(LOAD_STORY_DETAIL, fetchStoryIdsData);
}

export default function* rootSaga() {
  yield all([loadStoryList()]);
}

// Login Saga: this will be fired on LOGIN_REQUESTED actions
/* function* onLogin(action) {
   try {
      const credentials = yield call(Api.login, action.payload);
      yield put({type: "LOGIN_SUCCEEDED", credentials: credentials});
   } catch (e) {
      yield put({type: "LOGIN_FAILED", message: e.message});
   }
} */

/*
  Starts login on each dispatched `LOGIN_REQUESTED` action.
*/
/* function* login() {
  yield takeEvery("LOGIN_REQUESTED", onLogin);
} */

// export default NewsSaga;
