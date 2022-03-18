// 注入API參數至 state fullSearchData
export const SET_FULL_SEARCH_DATA = 'SET_FULL_SEARCH_DATA'
export const SET_ACADEMY_OPTIONS = 'SET_ACADEMY_OPTIONS'
export const SET_COURSE_OPTIONS = 'SET_COURSE_OPTIONS'
export const SET_TIME_OPTIONS = 'SET_TIME_OPTIONS'
export const FILTER_SEARCH_DATA = 'FILTER_SEARCH_DATA'
export const TRIGGER_PRICE_SELECTED = 'TRIGGER_PRICE_SELECTED'
export const ADD_COLLECTION = 'ADD_COLLECTION'

// 傳入課程與學院列表API回傳值
export const setFullSearchData = (payload) => {
  payload.searchRlt = payload.searchRlt.map((it, index) => {
    return {
      ...it,
      // 索引列參數
      index,
      // 秒數參數
      courseSeconds: it.classStartTime ? (it.courseHours * 60 * 24) : it.courseHours
    }
  })
  return {
    type: SET_FULL_SEARCH_DATA,
    payload
  }
}
// 傳入學院篩選選項
export const setAcademyOptions = (payload) => {
  return (dispatch) => {
    dispatch({ type: SET_ACADEMY_OPTIONS, payload })
    dispatch({ type: FILTER_SEARCH_DATA })
  }
}
// 傳入課程篩選選項
export const setCourseOptions = (payload) => {
  return (dispatch) => {
    dispatch({ type: SET_COURSE_OPTIONS, payload })
    // 重製學院/培訓時長參數
    dispatch({ type: SET_TIME_OPTIONS, payload: [] })
    dispatch({ type: SET_ACADEMY_OPTIONS, payload: [] })
    dispatch({ type: FILTER_SEARCH_DATA })
  }
}
// 傳入培訓時程篩選選項
export const setTimeOptions = (payload) => {
  return (dispatch) => {
    dispatch({ type: SET_TIME_OPTIONS, payload })
    dispatch({ type: FILTER_SEARCH_DATA })
  }
}
// 切換價格排序選項
export const triggerPriceSelected = (payload) => {
  return (dispatch) => {
    dispatch({ type: TRIGGER_PRICE_SELECTED, payload })
    dispatch({ type: FILTER_SEARCH_DATA })
  }
}
// 重製課程篩選條件
export const resetFilterOptions = () => {
  return (dispatch) => {
    dispatch({ type: SET_COURSE_OPTIONS, payload: [] })
    dispatch({ type: SET_ACADEMY_OPTIONS, payload: [] })
    dispatch({ type: SET_TIME_OPTIONS, payload: [] })
    dispatch({ type: FILTER_SEARCH_DATA })
  }
}
export const addCollection = (payload) => {
  return (dispatch) => {
    dispatch({ type: ADD_COLLECTION, payload })
    dispatch({ type: FILTER_SEARCH_DATA })
  }
}