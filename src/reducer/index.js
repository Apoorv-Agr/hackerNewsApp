import { FETCH_STORY_DETAIL, FETCH_STORY_ID } from "../constants/index";

const initialAppState = {
  storyIdList: [],
  storyDetails: [],
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
    default:
      return state;
  }
}
