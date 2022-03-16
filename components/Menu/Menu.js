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
    transform: ${props => (props.rotate ? `rotate(180deg)` : `rotate(0deg)`)};
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
  li {
    padding: 10px
  }
`
const Menu = (props) => {
  const { title, list } = props
  const content = list.map(it => {
    return (
      <li key={it.value}>
        <Checkbox>{it.title}</Checkbox>
      </li>
    )
  })
  const [active, setActive] = useState(true);
  const height = active ? 'auto' : '0'
  return (
    <Submenu>
      <SubmenuTitle onClick={() => setActive(!active)}>
        {title}
        <i className="fa fa-angle-down" rotate={active}></i>
      </SubmenuTitle>
      <AnimateHeight
        duration={200}
        height={height}
      >
        <SubmenuContent>
          {content}
        </SubmenuContent>
      </AnimateHeight>
    </Submenu>
  )
}
export default Menu