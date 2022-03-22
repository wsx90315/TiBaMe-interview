import Head from 'next/head'
import axios from 'axios'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { wrapper } from '@/store/index.js';
import { Pagination, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import Layout from '@/components/Layout'
import SearchFilter from '@/components/SearchFilter'
import SearchTitleSelect from '@/components/SearchTitleSelect'
import SearchItem from '@/components/SearchItem'

import courseKeys from '@/utils/courseKeys';
import chunk from '@/utils/chunk';
import { setFullSearchData } from '@/store/actions';

const P = styled.div`
  font-family: PingFangTC-Regular, sans-serif;
  text-align: left;
  letter-spacing: 0px;
  color: #000000;
  margin: 32px 0;
  font-size: 20px;
`

const State = () => useSelector((state) => state)
const Search = () => {
  const value = '人工智慧'
  const { fullSearchData, searchData, courseOptions } = State()
  const { searchRlt, academy } = fullSearchData
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState(1);
  const [pageData, setpageData] = useState([]);
  const antIcon = <LoadingOutlined style={{ fontSize: 72 }} spin />;

  // 切割資料數量回傳帶入該分頁資料
  const chunkPageData = (items, index = 1) => {
    const chunkArray = chunk(items, 10)
    return chunkArray[index - 1]
  }
  // 切換分頁
  const changePage = (value) => {
    setCurrent(value)
    setpageData(chunkPageData(searchData, value))
  }
  // 取得列表資料
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('https://demo4856630.mockable.io/fullSearch')
      dispatch(setFullSearchData(data.data))
      setLoading(false)
    }
    fetchData()
  }, [dispatch])

  // 資料過濾或變更排序, 預設分頁回到第一頁 
  useEffect(() => {
    setCurrent(1)
    setpageData(chunkPageData(searchData))
  }, [searchData])

  // 統計 預設學院數量, 課程數量
  const courseQuantity = searchRlt
    ? searchRlt.reduce((acc, val) => {
      val.courseType in acc
        ? acc[val.courseType] += 1
        : acc[val.courseType] = 1
      return acc
    }, {})
    : {}

  // 統計學院數量
  const academyQuantity = searchRlt ? searchRlt
    .filter(it => courseOptions.length ? courseOptions.includes(it.courseType) : true)
    .reduce((acc, val) => {
      val.firstCategoryUid in acc
        ? acc[val.firstCategoryUid] += 1
        : acc[val.firstCategoryUid] = 1
      return acc
    }, {}) : {}

  // 學院列表
  const academyList = academy
    ? academy.reduce((acc, it) => {
      const { firstCategoryUid: value, firstCategoryName: title } = it
      if (academyQuantity[value]) acc.push({ value, label: `${title} (${academyQuantity[value]})` })
      return acc
    }, [])
    : []

  // 課程列表
  const courseList = searchRlt
    ? Object.keys(courseKeys).reduce((acc, key) => {
      const { name } = courseKeys[key]
      if (courseQuantity[key]) acc.push({ value: key, label: `${name} (${courseQuantity[key]})`, })
      return acc
    }, [])
    : []

  return (
    <>
      <Head>
        <title>search</title>
      </Head>
      <Spin indicator={antIcon} spinning={loading}>
        <Layout>
          <P>
            搜尋 <b>“{value}”</b>的結果
          </P>
          {academy ? <SearchFilter academyList={academyList} courseList={courseList}></SearchFilter> : null}
          <>
            <SearchTitleSelect numberOfCourses={searchData.length}></SearchTitleSelect>
            {searchRlt && searchRlt.length
              ? <div>
                {pageData && pageData.length ? pageData.map((item, index) => (<SearchItem key={index} item={item}></SearchItem>)) : null}
                <Pagination
                  defaultCurrent={1}
                  current={current}
                  total={searchData.length}
                  onChange={(value) => changePage(value)}
                />
              </div>
              : <p>暫無資料</p>
            }

          </>
        </Layout>
      </Spin>
    </>
  )
}

export default wrapper.withRedux(Search)
