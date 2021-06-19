import './StartPage.scss'

import BaseButton from './components/BaseButton'
import serviceIllust from './service_illust.svg'

const StartPage = () => {
  const baseButtonStyle = {
    marginTop: '60px',
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  return (
    <div className="StartPage">
      <div className="main-section">
        <div className="title">
          <p>Tirrilee Estimate Program ( Beta-Service )</p>
        </div>
        <img src={serviceIllust} className="service-illust" alt="service-illust" />
      </div>
      <BaseButton
        styles={baseButtonStyle}>{ '시작하기' }
      </BaseButton>
    </div>
  );
}

export default StartPage
