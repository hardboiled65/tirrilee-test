import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'

import './Step3.scss'

import ContentButtonSmall from './components/ContentButtonSmall'
import BaseButton from './components/BaseButton'
import store from './store/index'
import { setPageMultiple } from './actions/index'

const Step3 = (props) => {
  // ['none', 'x1', 'x2']
  const [selection, setSelection] = useState('none');

  const history = useHistory();

  function goBack() {
    history.goBack();
  }

  function goNext() {
    history.push('/step4');
  }

  useEffect(() => {
    const multiple = store.getState().pageMultiple;
    if (multiple !== 0) {
      if (multiple === 1) {
        setSelection('x1');
      } else if (multiple === 2) {
        setSelection('x2');
      }
    }
  }, []);

  useEffect(() => {
    let multiple = 0;
    if (selection === 'x1') {
      multiple = 1;
    } else if (selection === 'x2') {
      multiple = 2;
    }
    props.dispatch(setPageMultiple(multiple));
  }, [props, selection]);

  return (
    <div className="Step3">
      <div className="main-section">
        <p className="title">2단계, 작업 페이지를 선정해봅시다.</p>
        <p className="description">이전단계에서 설명한 기본금액에 페이지 수를 곱합니다.</p>
      </div>
      <div className="inner-section">
        <p className="title">03. 작업하려는 페이지의 양은 어떻게 되나요?</p>
        <p className="description">혹시 몇 페이지가 나올지에 대해 감이 안잡히시나요?<br />
간단한 정보구조도(I.A)를 설계해보시면<br />
선택에 많은 도움이 될꺼에요!</p>
        <ContentButtonSmall
          title="~20P"
          description="기본 금액 x1"
          active={selection === true}
          styles={{
            width: 'calc(100% - 24px)',
            marginTop: '40px',
          }}
          onClick={() => { setSelection('x1'); }}
        />
        <ContentButtonSmall
          title="21P~30P"
          description="기본 금액 x2"
          active={selection === false}
          styles={{
            width: 'calc(100% - 24px)',
            marginTop: '20px',
          }}
          onClick={() => { setSelection('x2'); }}
        />
      </div>
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
          glow={selection !== null}
          disabled={selection === null}
          onClick={goNext}>다음 단계</BaseButton>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return { pageMultiple: state.pageMultiple };
};

export default connect(mapStateToProps)(Step3)
