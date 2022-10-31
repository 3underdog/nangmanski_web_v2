const TimeFormat = (dt) => {
  let min = 60 * 1000;
  let c = new Date();
  let d = new Date(dt);
  let minsAgo = Math.floor((c - d) / min);
  let result = {
    raw:
      // d.getFullYear() +
      // "-" +
      (d.getMonth() + 1 > 9 ? '' : '0') +
      (d.getMonth() + 1) +
      '-' +
      (d.getDate() > 9 ? '' : '0') +
      d.getDate(),
    formatted: '',
  };
  if (minsAgo < 60) {
    // 1시간 내
    result.formatted = minsAgo + '분전';
  } else if (minsAgo < 60 * 24) {
    // 하루 내
    result.formatted = Math.floor(minsAgo / 60) + '시간전';
  } else if (minsAgo < 60 * 24 * 30) {
    // 한달 내
    result.formatted = Math.floor(minsAgo / 60 / 24) + '일전';
  } else {
    // 한달 이상
    return result.raw;
  }
  return result.formatted;
};
export default TimeFormat;
