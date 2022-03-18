const makeBetweenTime = (key, courseSeconds) => {
  const fourHours = 60 * 60 * 4
  const day = 60 * 60 * 24
  const threeDays = day * 3
  const week = day * 7
  let result = true
  switch (key) {
    case 1:
      // 0 小時 - 4 小時
      result = courseSeconds <= fourHours
      break;
    case 2:
      // 4 小時 - 1 日
      result = fourHours <= courseSeconds && courseSeconds <= day
      break;
    case 3:
      // 1 日 - 3 日
      result = day <= courseSeconds && courseSeconds <= threeDays
      break;
    case 4:
      // 3 日 - 1 週
      result = threeDays <= courseSeconds && courseSeconds <= week
      break;
    default:
      break;
  }
  return result
}
export default makeBetweenTime