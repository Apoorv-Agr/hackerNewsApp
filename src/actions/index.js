import {
  LOAD_STORY_LIST_ID,
  FETCH_STORY_ID,
  FETCH_STORY_DETAIL,
  LOAD_STORY_DETAIL,
  UPDATE_STORE_FULL_STORY_DATA,
  STORY_DATA_AFTER_DELETE,
} from "../constants";

export function loadStoryListIdAction() {
  return {
    type: LOAD_STORY_LIST_ID,
  };
}

export function loadStoryDetailsAction(storyId = "") {
  return {
    type: LOAD_STORY_DETAIL,
    payLoad: storyId,
  };
}

export function fetchSortIdsAction(storyIds = []) {
  return {
    type: FETCH_STORY_ID,
    payLoad: storyIds,
  };
}

export function fetchSortIdsDetails(storyId = "") {
  return {
    type: FETCH_STORY_DETAIL,
    payLoad: storyId,
  };
}

export function updateFinalDataAction(completeDetails = []) {
  return {
    type: UPDATE_STORE_FULL_STORY_DATA,
    payLoad: completeDetails,
  };
}

export function onDeleteAction(updatedDetails = []) {
  return {
    type: STORY_DATA_AFTER_DELETE,
    payLoad: updatedDetails,
  };
}
