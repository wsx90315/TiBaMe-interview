import { createStore, applyMiddleware } from 'redux';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import thunk from 'redux-thunk'
import makeBetweenTime from '@/utils/makeBetweenTime'
const defaultState = {
  // 預存API搜尋資料
  fullSearchData: {},
  // 學院勾選狀態
  academyOptions: [],
  // 課程勾選狀態
  courseOptions: [],
  // 時常勾選狀態
  timeOptions: [],
  // 課程列表
  searchData: [],
  // 價格排序
  priceSelected: 0
}

// create your reducer
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case 'SET_FULL_SEARCH_DATA': {
      const { searchRlt } = action.payload
      return { ...state, fullSearchData: action.payload, searchData: searchRlt };
    }
    case 'SET_ACADEMY_OPTIONS':
      return { ...state, academyOptions: action.payload };
    case 'SET_COURSE_OPTIONS':
      return { ...state, courseOptions: action.payload };
    case 'SET_TIME_OPTIONS':
      return { ...state, timeOptions: action.payload };
    case 'FILTER_SEARCH_DATA': {
      const filterSearchRlt = (searchData, { academyOptions, courseOptions, timeOptions, priceSelected }) => {
        let result = [...searchData]
        // 判斷是否進行價格排序
        if (priceSelected) result.sort((a, b) => priceSelected === 1 ? b.price - a.price : a.price - b.price)
        // 判斷是否進行學院過濾
        if (academyOptions.length) result = result.filter(it => academyOptions.includes(it.firstCategoryUid))
        // 判斷是否進行課程類型過濾
        if (courseOptions.length) result = result.filter(it => courseOptions.includes(it.courseType))
        // 判斷是否進行培訓時長過濾
        if (timeOptions.length) {
          result = timeOptions.reduce((acc, val) => {
            acc.push(...result.filter(it => makeBetweenTime(val, it.courseSeconds)))
            return acc
          }, [])
        }
        return result
      }
      const { searchRlt } = state.fullSearchData
      return { ...state, searchData: filterSearchRlt(searchRlt, state) };
    }
    case 'TRIGGER_PRICE_SELECTED':
      return { ...state, priceSelected: action.payload };
    case 'TRIGGER_PRICE_SELECTED':
      return { ...state, priceSelected: action.payload };
    case 'ADD_COLLECTION': {
      // const { searchRlt } = 
      const { index, updataCollection } = action.payload
      state.fullSearchData.searchRlt[index].isCollection = updataCollection
      return { ...state };
    }
    default:
      return state;
  }
};


// create a makeStore function
const makeStore = context => createStore(reducer, applyMiddleware(thunk));

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, { debug: true });