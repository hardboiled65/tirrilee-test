import './StartPage.scss'

import BaseButton from './components/BaseButton'
import serviceIllust from './service_illust.svg'
import { Link } from 'react-router-dom';

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
      <Link to='/step0' style={{ textDecoration: 'none', display: 'contents' }}>
        <BaseButton
          styles={baseButtonStyle}>{ '시작하기' }
        </BaseButton>
      </Link>
    </div>
  );
}

export default StartPage
