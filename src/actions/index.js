import {
  LOAD_STORY_LIST_ID,
  FETCH_STORY_ID,
  FETCH_STORY_DETAIL,
  LOAD_STORY_DETAIL,
} from "../constants/index";

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
