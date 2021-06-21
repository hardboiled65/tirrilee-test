import './DetailContentCheckbox.scss'

import checkboxDefault from '../checkbox-default.svg'
import checkboxChecked from '../checkbox-checked.svg'

const DetailContentCheckbox = ({title, detail, description, noShadow, checked, styles, onClick}) => {
  const style = {
    boxShadow: noShadow || !checked
      ? '0 3px 10px 0 rgba(0, 0, 0, 0.1)'
      : undefined,
    backgroundColor: checked ? '#3a7bf1' : undefined,
    color: checked ? '#ffffff' : undefined,
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
      <div className={`detail ${checked ? 'checked' : ''}`}>{ detail }</div>
      <div className={`description ${checked ? 'checked' : ''}`}>{ description }</div>
    </div>
  );
}

export default DetailContentCheckbox
