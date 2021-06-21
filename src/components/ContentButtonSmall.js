import './ContentButtonSmall.scss'

const ContentButtonSmall = ({title, description, noShadow, active, styles, onClick}) => {
  const style = {
    boxShadow: noShadow || active
      ? undefined
      : '0 3px 10px 0 rgba(0, 0, 0, 0.1)',
    backgroundColor: active ? '#3a7bf1' : '#ffffff',
    color: active ? '#ffffff' : undefined,
    ...styles,
  };
  
  return (
    <div className="ContentButtonSmall"
      style={style}
      onClick={onClick}>
      <div className="title">{ title }</div>
      <div className={`description ${active ? 'active' : ''}`}>{ description }</div>
    </div>
  );
}

export default ContentButtonSmall
