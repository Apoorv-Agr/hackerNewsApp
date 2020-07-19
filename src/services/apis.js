import axios from "axios";
import { getDesiredData } from "../selectors/filterData";
import {API_LIMIT} from '../constants'

export const baseUrl = "https://hacker-news.firebaseio.com/v0/";

export const newsUrl = `${baseUrl}topstories.json?print=pretty&orderBy="$key"&limitToLast=${API_LIMIT}`;

export const storyUrl = `${baseUrl}item`;

export const getStoryId = async () => {
  const apiResp = await axios.get(newsUrl);
  return apiResp.data;
};

export const getStoryData = async (storyId) => {
  const apiResp = await axios.get(`${storyUrl}/${storyId}.json?print=pretty`);
  return getDesiredData(apiResp.data);
};
