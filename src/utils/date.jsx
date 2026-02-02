export const createdOnDate = (user) => {
  if (!user?.createdAt) return "Unknown";
  const createdOn = new Date(user?.createdAt);
  if (isNaN(createdOn.getTime())) return "Unknown";
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return createdOn.toLocaleDateString("en-US", options);
};


export const getTimeDifference = (date) => {
  const datePosted = new Date(date);
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  return datePosted.toLocaleDateString("en-US", options);
};
