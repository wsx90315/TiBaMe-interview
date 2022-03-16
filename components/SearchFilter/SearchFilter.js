import styled from 'styled-components'
import Menu from '../Menu'

const Card = styled.div`
  font-family: PingFangTC-Semibold, sans-serif;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 5px #0000000B;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 15px;
`
const CardHead = styled.div`
  position: relative;
  font: normal normal 600 20px PingFang TC;
`
const Extra = styled.a`
  color: #09ADBF;
  font: normal normal 600 16px PingFang TC;
  position: absolute;
  right: 0;
  top: 0;
`
const SearchFilter = () => {
  const dateList = [
    { value: 1, title: '0 小時 - 4 小時' },
    { value: 2, title: '4 小時 - 1 日' },
    { value: 3, title: '1 日 - 3 日' },
    { value: 4, title: '3 日 - 1 週' }
  ]
  const courseType = {
    online: '線上課程',
    offline: '真人直播',
    program: '增能學程',
    goodjob: '就業養成'
  }
  return (
    <>
      <Card>
        <CardHead>
          課程篩選條件
          <Extra>
            清除全部
          </Extra>
        </CardHead>
      </Card>
      <Card>
        <Menu title={'培訓時長'} list={dateList}></Menu>
      </Card>
    </>
  )
}
export default SearchFilter