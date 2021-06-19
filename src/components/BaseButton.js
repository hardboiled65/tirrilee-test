import './BaseButton.scss'

const BaseButton = ({children, width, height, fontSize, bold, fontColor, styles}) => {
  const fontWidth = width ? width : 350;
  const fontHeight = height ? height : 60;
  const styleFontSize = fontSize ? fontSize : 20;
  const isBold = bold ? bold : true;
  const styleFontColor = fontColor ? fontColor : '#226bef';

  const style = {
    width: `${fontWidth}px`,
    height: `${fontHeight}px`,
    fontSize: `${styleFontSize}px`,
    fontWeight: isBold ? 'bold' : 'normal',
    color: styleFontColor,
    boxShadow: '0 3px 10px 0 rgba(0, 0, 0, 0.1)',
    ...styles,
  };

  return (
    <div className="BaseButton"
      style={style}>
        { children }
    </div>
  );
}

export default BaseButton
