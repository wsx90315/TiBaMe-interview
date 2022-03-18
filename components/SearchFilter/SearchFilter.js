import styled from 'styled-components'
import Menu from '@/components/Menu'
import { Divider } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { setAcademyOptions, setCourseOptions, setTimeOptions, resetFilterOptions } from '@/store/actions'

const Container = styled.div`
`
const Card = styled.div`
  font-family: PingFangTC-Semibold, sans-serif;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 5px #0000000B;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 15px;
  .ant-divider-horizontal {
    margin: 8px 0;
  }
`
const CardHead = styled.div`
  position: relative;
  font: normal normal 600 20px PingFang TC;
  align-items: center;
  padding-bottom: 16px;
`
const Extra = styled.a`
  color: #09ADBF;
  font: normal normal 600 16px PingFang TC;
`
const State = () => useSelector((state) => state)
const SearchFilter = ({ academyList, courseList }) => {
  const dispatch = useDispatch()
  const { academyOptions, courseOptions, timeOptions } = State()
  const showRmoveBtn = [academyOptions, courseOptions, timeOptions].some(it => it.length)
  const dateList = [
    { value: 1, label: '0 小時 - 4 小時' },
    { value: 2, label: '4 小時 - 1 日' },
    { value: 3, label: '1 日 - 3 日' },
    { value: 4, label: '3 日 - 1 週' }
  ]

  return (
    <Container>
      <Card>
        <CardHead className="row">
          <div className="col">
            課程篩選條件
          </div>
          {showRmoveBtn ? <Extra className="col-auto" onClick={() => dispatch(resetFilterOptions())}>清除全部</Extra> : null}
        </CardHead>
        <Menu
          title={'課程類型'}
          list={courseList}
          options={courseOptions}
          onChange={(value) => dispatch(setCourseOptions(value))}
        />
        <Divider />
        <Menu
          title={'學院'}
          list={academyList}
          options={academyOptions}
          onChange={(value) => dispatch(setAcademyOptions(value))}
        />
      </Card>
      <Card>
        <Menu
          title={'培訓時長'}
          list={dateList}
          options={timeOptions}
          onChange={(value) => dispatch(setTimeOptions(value))}
        />
      </Card>
    </Container>
  )
}
export default SearchFilter
