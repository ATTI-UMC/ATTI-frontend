export const formatDate = (isoString) => {
  const date = new Date(isoString);

  const month = date.getMonth() + 1;
  const day = date.getDate();

  const hours = date.getHours();
  const minutes = date.getMinutes();

  // 분이 한 자리 수일 경우 앞에 0을 붙여줍니다
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${month}/${day} ${hours}:${formattedMinutes}`;
};
