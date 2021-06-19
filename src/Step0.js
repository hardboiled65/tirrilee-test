import { useState } from 'react'
import { useHistory } from 'react-router-dom'

import './Step0.scss'

import DetailContentButton from './components/DetailContentButton'
import BaseButton from './components/BaseButton'

const Step0 = () => {
  // ['none', 'app', 'web']
  const [selection, setSelection] = useState('none');

  const history = useHistory();

  function goBack() {
    history.goBack();
  }

  function goNext() {
    history.push('/step1');
  }


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
          width: 'calc(100% - 24px)',
        }}
        onClick={() => { setSelection('app'); }}
      />
      <DetailContentButton
        title="Web 개발"
        detail="반응형 웹"
        description="400만원"
        active={selection === 'web'}
        styles={{
          width: 'calc(100% - 24px)',
          marginTop: '20px',
        }}
        onClick={() => { setSelection('web'); }}
      />
      <div className="buttons">
        <BaseButton
          width={167}
          height={48}
          fontSize={14}
          bold={false}
          fontColor={'#000000'}
          onClick={goBack}>이전 단계</BaseButton>
        <BaseButton
          width={167}
          height={48}
          fontSize={14}
          bold={false}
          fontColor={'#000000'}
          glow={selection !== 'none'}
          disabled={selection === 'none'}
          onClick={goNext}>다음 단계</BaseButton>
      </div>
      <p
        style={{
          marginTop: '56px',
          fontSize: '14px',
          color: '#6d6c6c',
        }}
      >1 / 3</p>
    </div>
  );
}

export default Step0
