import styled from 'styled-components'
import AnimateHeight from 'react-animate-height';
import { Checkbox } from 'antd';
import { useState } from 'react';

const Submenu = styled.div`
`
const SubmenuTitle = styled.div`
  position: relative;
  cursor: pointer;
  font: normal normal 600 16px PingFang TC;
  margin: 10px 0;
  transition: all .2s ease-in-out;
  color: #000;
  i {
    transition: all .2s ease-in-out;
    position: absolute;
    right: 0;
    top: 0;
  }
`
const SubmenuContent = styled.ul`
  height: ${props => props.height};
  position: relative;
  list-style: none;
  outline: 0;
  .ant-checkbox-wrapper {
    padding: 10px
  }
`
const Menu = ({ title, list, options, onChange }) => {
  const [active, setActive] = useState(true);
  const height = active ? 'auto' : 0
  const transform = active ? `rotate(180deg)` : `rotate(0deg)`

  return (
    <Submenu>
      <SubmenuTitle onClick={() => setActive(!active)}>
        {title}
        <i className="fa fa-angle-down" style={{ transform }}></i>
      </SubmenuTitle>
      <AnimateHeight
        duration={200}
        height={height}
      >
        <SubmenuContent>
          <Checkbox.Group options={list} value={options} onChange={onChange} />
        </SubmenuContent>
      </AnimateHeight>
    </Submenu>
  )
}
export default Menu
