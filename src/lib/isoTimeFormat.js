const isoTimeFormat = (dateTime) => {
  const date = new Date(dateTime);
  const localDateTime = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  return localDateTime;
};

export default isoTimeFormat;
