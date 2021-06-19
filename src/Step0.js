import { useState } from 'react'

import './Step0.scss'

import DetailContentButton from './components/DetailContentButton'

const Step0 = () => {
  // ['none', 'app', 'web']
  const [selection, setSelection] = useState('none');

  return (
    <div className="Step0">
      <div className="main-section">
        <span>0단계, 어떤 서비스를 만들고 싶으신가요</span>  
      </div>
      <DetailContentButton
        title="App 개발"
        detail="Android &amp; iOS"
        description="300만원"
        active={selection === 'app'}
        styles={{
          width: '100%',
          margin: '0 12px 0 12px',
        }}
        onClick={() => { setSelection('app'); }}
      />
      <DetailContentButton
        title="Web 개발"
        detail="반응형 웹"
        description="400만원"
        active={selection === 'web'}
        styles={{
          width: '100%',
          margin: '20px 12px 0 12px',
        }}
        onClick={() => { setSelection('web'); }}
      />
      <div className="buttons"></div>
    </div>
  );
}

export default Step0
