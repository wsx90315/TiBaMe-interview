import Image from 'next/image'
import styled from 'styled-components'

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
  color: #0000001A;
  cursor: pointer;
  transition: all .2 ease-in-out;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: #FFFFFFCC;
`
const CardImageBackground = styled.img`
  z-index: 1;
  width: auto;
  height: 100%;
`
const CardContent = styled.div`
  padding: 20px;
  width: 100%;
  .course-name {
    font: normal normal bold 16px Roboto;
  }
  .course-price {
    font: normal normal bold 18px Roboto;
    color: #09ADBF;
  }
  .course-type {
    font-family: PingFangTC-Semibold, sans-serif;
    font: normal normal 600 12px PingFang TC;
    color: #09ADBF;
  }
  .course-time {
    font-family: PingFangTC-Regular, sans-serif;
    font: normal normal normal 12px/18px PingFang TC;
    color: #0000009A;
  }
`
const SearchItem = () => {
  return (
    <Card>
      <CardImage>
        <CardImageLabel>確定開課</CardImageLabel>
        <CardImageLike className="fa fa-heart"></CardImageLike>
        <CardImageBackground src="https://cdn-static.tibame.com/course/502/coverPic/cc9731bc-daeb-4261-8cf0-55e9ada6c6cf_Cover-機器學習.png" />
      </CardImage>
      <CardContent>
        <div className="row">
          <div className="col course-name" style={{ maxWidth: '323px' }}>王作桓❤不寫程式的大數據分析師I：數據分析 之王-超強excel樞紐分析</div>
          <div className="col-auto course-price">NT$ 250</div>
        </div>
        <div>
          <span className="course-type">線上課程</span>
          <span className="course-time">∙ 約 4.4 小時</span>
        </div>
      </CardContent>
    </Card>
  )
}
export default SearchItem