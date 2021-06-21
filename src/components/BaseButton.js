import './BaseButton.scss'

const BaseButton = ({children, width, height, fontSize, bold, fontColor, backgroundColor, glow, disabled, styles, onClick}) => {
  const fontWidth = width ? width : 350;
  const fontHeight = height ? height : 60;
  const styleFontSize = fontSize ? fontSize : 20;
  const isBold = bold === false ? false : true;
  const styleFontColor = fontColor ? fontColor : '#226bef';
  const styleBackgroundColor = backgroundColor ? backgroundColor : undefined;
  const styleGlow = glow ? glow : false;
  const isDisabled = disabled ? disabled : false;

  const style = {
    width: `${fontWidth}px`,
    height: `${fontHeight}px`,
    fontSize: `${styleFontSize}px`,
    fontWeight: isBold ? 'bold' : 'normal',
    color: styleFontColor,
    backgroundColor: styleBackgroundColor,
    boxShadow: styleGlow ? '2px 2px 15px 0 rgba(34, 107, 239, 0.5)' : '0 3px 10px 0 rgba(0, 0, 0, 0.1)',
    ...styles,
  };

  return (
    <div className="BaseButton"
      style={style}
      onClick={!isDisabled ? onClick : undefined}>
        { children }
    </div>
  );
}

export default BaseButton
