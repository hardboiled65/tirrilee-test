import './DetailContentCheckbox.scss'

import checkboxDefault from '../checkbox-default.svg'
import checkboxChecked from '../checkbox-checked.svg'

const DetailContentCheckbox = ({title, detail, description, noShadow, checked, styles, onClick}) => {
  const style = {
    ...styles,
  };

  return (
    <div className="DetailContentCheckbox"
      style={style}
      onClick={onClick}>
      {checked === true
        ? <img src={checkboxChecked} alt="checkbox-checked" />
        : <img src={checkboxDefault} alt="checkbox-default" />
      }
      <div className="title">{ title }</div>
      <div className="detail">{ detail }</div>
      <div className="description">{ description }</div>
    </div>
  );
}

export default DetailContentCheckbox
