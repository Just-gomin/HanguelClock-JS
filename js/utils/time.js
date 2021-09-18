export const getCurrentTime = () => {
  const now = new Date();

  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();

  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  return {
    year: year,
    month: month < 10 ? `0${month}` : month,
    day: day < 10 ? `0${day}` : day,
    hour: hour < 10 ? `0${hour}` : hour,
    minute: minute < 10 ? `0${minute}` : minute,
    second: second < 10 ? `0${second}` : second,
  };
};
