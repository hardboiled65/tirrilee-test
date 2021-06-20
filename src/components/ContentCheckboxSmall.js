import './ContentCheckboxSmall.scss'

import checkboxDefault from '../checkbox-default.svg'
import checkboxChecked from '../checkbox-checked.svg'

const ContentCheckboxSmall = ({title, description, noShadow, checked, styles, onClick}) => {
  const style = {
    backgroundColor: checked ? '#3a7bf1' : undefined,
    color: checked ? '#ffffff' : undefined,
    ...styles,
  };

  return (
    <div className="ContentCheckboxSmall"
      style={style}
      onClick={onClick}>
      <div className="title">{ title }</div>
      <div className={`description ${checked ? 'checked' : ''}`}>{ description }</div>
      {checked === false
        ? <img src={checkboxDefault} alt="checkbox-default" />
        : <img src={checkboxChecked} alt="checkbox-checked" />
      }
    </div>
  );
}

export default ContentCheckboxSmall
