import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'

import './Step2.scss'

import DetailContentButton from './components/DetailContentButton'
import BaseButton from './components/BaseButton'
import store from './store/index'
import { setDesignPrice } from './actions/index'

const Step2 = (props) => {
  // [null, true, false]
  const [selection, setSelection] = useState(null);

  const history = useHistory();

  function goBack() {
    history.goBack();
  }

  function goNext() {
    history.push('/step3');
  }

  useEffect(() => {
    const price = store.getState().designPrice;
    if (price !== 0) {
      if (price === 50) {
        setSelection(true);
      } else if (price === 100) {
        setSelection(false);
      }
    }
  }, []);

  useEffect(() => {
    let price = 0;
    if (selection === true) {
      price = 50;
    } else if (selection === false) {
      price = 100;
    }
    props.dispatch(setDesignPrice(price));
  }, [props, selection]);

  return (
    <div className="Step2">
      <div className="main-section">
        <p className="title">1단계, 먼저 개발범위를 먼저 생각해보아요.</p>
        <p className="description">개발범위로 <span style={{ color: '#ff0000' }}>기본금액</span>을 정할 수 있어요!</p>
      </div>
      <div className="inner-section">
        <p className="title">02. 디자인이 되어 있나요?</p>
        <p className="description">아직 구체적인 디자인이 진행되어 있지 않아도 돼요!<br />
티릴리의 디자이너들과 함께 멋진 디자인을 만들어봐요!</p>
        <DetailContentButton
          title="네! 디자인이 되어 있어요."
          detail="멋져요! 개발을 할 수 있도록 디자인을 함께 보완해요."
          description="+50만원"
          active={selection === true}
          styles={{
            width: 'calc(100% - 24px)',
            marginTop: '40px',
          }}
          onClick={() => { setSelection(true); }}
        />
        <DetailContentButton
          title="앗.. 디자인은 없어요."
          detail="괜찮아요 :) 티릴리와 함께 디자인을 진행해봐요!"
          description="+100만원"
          active={selection === false}
          styles={{
            width: 'calc(100% - 24px)',
            marginTop: '20px',
          }}
          onClick={() => { setSelection(false); }}
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
  return { designPrice: state.designPrice };
};

export default connect(mapStateToProps)(Step2)
