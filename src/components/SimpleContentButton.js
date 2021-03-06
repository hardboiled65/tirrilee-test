import { useState } from 'react'

import './SimpleContentButton.scss'

const SimpleContentButton = ({title, description, noShadow}) => {
  const [active, setActive] = useState(false);
  
  const style = {
    boxShadow: noShadow || active
      ? undefined
      : '0 3px 10px 0 rgba(0, 0, 0, 0.1)',
  };

  function onMouseDown() {
    setActive(true);
  }

  function onMouseUp() {
    setActive(false);
  }

  return (
    <div className="SimpleContentButton"
      style={style}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}>
      <div className="title">{ title }</div>
      <div className="description">{ description }</div>
    </div>
  );
}

export default SimpleContentButton
