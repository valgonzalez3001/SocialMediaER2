export const createdOnDate = (user, lang = "en") => {
  if (!user?.createdAt) return "Unknown";
  const createdOn = new Date(user?.createdAt);
  if (isNaN(createdOn.getTime())) return "Unknown";
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return createdOn.toLocaleDateString(lang, options);
};


export const getTimeDifference = (date, lang = "en") => {
  const datePosted = new Date(date);
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  return datePosted.toLocaleDateString(lang, options);
};
