import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'

import './Step1.scss'

import DetailContentButton from './components/DetailContentButton'
import BaseButton from './components/BaseButton'
import store from './store/index'
import { setDetailPlanPrice } from './actions/index'

const Step1 = (props) => {
  // [null, true, false]
  const [selection, setSelection] = useState(null);

  const history = useHistory();

  function goBack() {
    history.goBack();
  }

  function goNext() {
    history.push('/step2');
  }

  useEffect(() => {
    const price = store.getState().detailPlanPrice;
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
    props.dispatch(setDetailPlanPrice(price));
  }, [props, selection]);

  return (
    <div className="Step1">
      <div className="main-section">
        <p className="title">1단계, 먼저 개발범위를 먼저 생각해보아요.</p>
        <p className="description">개발범위로 <span style={{ color: '#ff0000' }}>기본금액</span>을 정할 수 있어요!</p>
      </div>
      <div className="inner-section">
        <p className="title">01. 상세기획이 되어 있나요?</p>
        <p className="description">아직 상세 기획 없이 단순 아이디어만 있어도 걱정하지 마세요!
티릴리와 함께 더 멋진 기획을 만들 수 있습니다!</p>
        <DetailContentButton
          title="네! 상세 기획이 있어요."
          detail="좋아요! 개발을 위한 기획을 함께 진행해요."
          description="+50만원"
          active={selection === true}
          styles={{
            width: 'calc(100% - 24px)',
            marginTop: '40px',
          }}
          onClick={() => { setSelection(true); }}
        />
        <DetailContentButton
          title="앗.. 아직 상세 기획이 없어요."
          detail="괜찮아요 :) 티릴리와 함께 서비스를 기획해보아요."
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
  return { detailPlanPrice: state.detailPlanPrice };
};

export default connect(mapStateToProps)(Step1)
