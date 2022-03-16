import Head from 'next/head'
import styled from 'styled-components'
import Layout from '../../components/Layout'
import SearchFilter from '../../components/SearchFilter'
import SearchTitleSelect from '../../components/SearchTitleSelect'
import SearchItem from '../../components/SearchItem'
import { Pagination } from 'antd';
const P = styled.div`
  font-family: PingFangTC-Regular, sans-serif;
  text-align: left;
  letter-spacing: 0px;
  color: #000000;
  margin: 32px 0;
  font-size: 20px;
`

export default function search () {
  const value = '人工智慧'
  return (
    <>
      <Head>
        <title>search</title>
      </Head>
      <Layout>
        <P>
          搜尋 <b>“{value}”</b>的結果
        </P>
        <SearchFilter></SearchFilter>
        <>
          <SearchTitleSelect></SearchTitleSelect>
          <SearchItem></SearchItem>
          <SearchItem></SearchItem>
          <SearchItem></SearchItem>
          <SearchItem></SearchItem>
          <Pagination defaultCurrent={1} total={50} />
        </>
      </Layout>
    </>
  )
}