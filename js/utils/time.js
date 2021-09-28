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
    month: month,
    day: day,
    hour: hour,
    minute: minute,
    second: second,
  };
};
