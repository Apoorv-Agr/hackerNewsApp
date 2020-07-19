export const getDesiredData = ({
  key = 0,
  by,
  kids,
  score,
  time,
  title,
  url,
  isDeleted = false,
  isRead = false,
  id,
} = {}) => {
  return {
    key,
    by,
    kids,
    score,
    time,
    title,
    url,
    isDeleted,
    isRead,
    id,
  };
};
