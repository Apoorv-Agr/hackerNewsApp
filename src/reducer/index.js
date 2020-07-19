import {
  FETCH_STORY_DETAIL,
  FETCH_STORY_ID,
  UPDATE_STORE_FULL_STORY_DATA,
  STORY_DATA_AFTER_DELETE,
} from "../constants";

const initialAppState = {
  storyIdList: [],
  storyDetails: [],
  fullDataDetails: [],
};

export default function handleActions(state = initialAppState, action = {}) {
  switch (action.type) {
    case FETCH_STORY_ID:
      return {
        ...state,
        storyIdList: action.storyIdList,
      };
    case FETCH_STORY_DETAIL:
      //   debugger;
      return {
        ...state,
        storyDetails: action.storyDetails,
      };
    case UPDATE_STORE_FULL_STORY_DATA:
      return {
        ...state,
        fullDataDetails: action.payLoad,
      };
    case STORY_DATA_AFTER_DELETE:
      return {
        ...state,
        fullDataDetails: action.payLoad,
      };
    default:
      return state;
  }
}
