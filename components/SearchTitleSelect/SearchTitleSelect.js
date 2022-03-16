import styled from 'styled-components'
import { Select } from 'antd';
import { useState } from 'react';
const { Option } = Select;
const Card = styled.div`
  position: relative;
  background: #FFFFFF;
  box-shadow: 0px 1px 5px #0000000B;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 30px;
  font: normal normal bold 20px/30px Roboto;
`
const CardHead = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  .classes {
    color: #09ADBF;
  }
`
const SearchTitleSelect = () => {
  const [selected, setSelected] = useState(0)
  const sortByPrice = [
    { value: 0, label: '排序' },
    { value: 1, label: '價格高至低' },
    { value: 2, label: '價格低至高' }
  ]
  const Options = sortByPrice.map(it => (<Option value={it.value} key={it.value}>{it.label}</Option>))
  return (
    <Card>
      <div className="row">
        <div className="col">
          <CardHead>
            <span className="classes">4</span>
            <span>&nbsp;門課程</span> 
          </CardHead>
        </div>
        <div className="col-auto">
        <Select
          size="large"
          defaultValue={selected}
          style={{ width: 165 }}
          onChange={(value) => setSelected(value)}
        >
          {Options}
            </Select>
        </div>
      </div>
    </Card>
  )
}
export default SearchTitleSelect