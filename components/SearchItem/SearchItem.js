import styled from 'styled-components'
import courseKeys from '@/utils/courseKeys';
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import { useDispatch } from 'react-redux'
import { addCollection } from '@/store/actions'
dayjs.extend(duration)

const Card = styled.div`
  display: flex;
  position: relative;
  background: #FFFFFF;
  box-shadow: 0px 1px 10px #00000019;
  border-radius: 4px;
  margin-bottom: 15px;
  font: normal normal bold 20px/30px Roboto;
  height: 190px;
  overflow: hidden;
  cursor: pointer;
`
const CardImage = styled.div`
  position: relative;
  height: 100%;
`
const CardImageLabel = styled.div`
  position: absolute;
  z-index: 2;
  font-family: PingFangTC-Semibold, sans-serif;
  font: normal normal 600 14px/28px PingFang TC;
  border-radius: 5px 0px 8px 0px;
  background: transparent linear-gradient(113deg, #57B933 0%, #309B16 100%) 0% 0% no-repeat padding-box;
  width: 78px;
  height: 26px;
  color: #fff;
  text-align: center;
`
const CardImageLike = styled.i`
  position: absolute;
  z-index: 2;
  right: 10px;
  top: 10px;
  color: ${props => props.theme.color};
  cursor: pointer;
  transition: all .2 ease-in-out;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: ${props => props.theme.strokeColor};;
`

const CardImageBackground = styled.img`
  z-index: 1;
   width: 334px;
  height: 100%;
  border-radius: 5px 0px 0px 5px;
`
const CardContent = styled.div`
  padding: 20px;
  width: 100%;
  .row {
    justify-content: space-between;
  }
  .course-name {
    font: normal normal bold 16px Roboto;
  }
  .course-price {
    font: normal normal bold 18px Roboto;
    color: #09ADBF;
  }
  .course-type {
    font: normal normal 600 12px PingFangTC-Semibold, sans-serif;
    color: ${props => props.color};
  }
  .course-time {
    font: normal normal normal 12px PingFangTC-Regular, sans-serif;
    color: #0000009A;
  }
`
const SearchItem = ({ item }) => {
  const dispatch = useDispatch()
  const { index, coverPic, price, courseName, courseType, isEnsure, classStartTime, courseHours, isCollection } = item
  const { name, color } = courseKeys[courseType]
  const Time = classStartTime
    ? `${dayjs(classStartTime).format('YYYY/MM/DD')} 開課`
    : `約 ${dayjs.duration({ seconds: courseHours }).asHours().toFixed(1)} 小時`

  const CardImageLikeTheme = {
    color: isCollection ? 'red' : '#0000001A',
    strokeColor: '#FFFFFFCC'
  };

  return (
    <Card>
      <CardImage>
        {isEnsure ? <CardImageLabel>確定開課</CardImageLabel> : null}
        <CardImageLike
          className="fa fa-heart"
          onClick={() => dispatch(addCollection({ index, updataCollection: isCollection ? 0 : 1 }))}
          theme={CardImageLikeTheme}
        ></CardImageLike>
        <CardImageBackground src={coverPic} />
      </CardImage>
      <CardContent color={color}>
        <div className="row">
          <div className="col course-name" style={{ minWidth: '323px' }}>{courseName}</div>
          <div className="col-auto course-price">NT$ {price}</div>
        </div>
        <div>
          <span className="course-type">{name}</span>
          <span className="course-time"> ∙ {Time}</span>
        </div>
      </CardContent>
    </Card>
  )
}
export default SearchItem
