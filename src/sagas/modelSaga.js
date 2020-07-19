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
export function* fetchStoryIdsData(action) {
  const data = yield call(getStoryData, action.payLoad);
  yield put({ type: FETCH_STORY_DETAIL, storyDetails: data });
}

export function* loadStoryList() {
  yield takeEvery(LOAD_STORY_LIST_ID, fetchStoryIdsList);
  yield takeEvery(LOAD_STORY_DETAIL, fetchStoryIdsData);
}

export default function* rootSaga() {
  yield all([loadStoryList()]);
}