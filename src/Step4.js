import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'

import './Step4.scss'

import ContentCheckboxSmall from './components/ContentCheckboxSmall'
import BaseButton from './components/BaseButton'
import store from './store/index'
import { setPageMultiple } from './actions/index'

const Step4 = (props) => {
  const [selections, setSelections] = useState({
    gps: false,
    map: false,
    kakaoPush: false,
    community: false,
    share: false,
    userTypeExpand: false,
    chat: false,
    none: false,
  });

  const history = useHistory();

  function goBack() {
    history.goBack();
  }

  function goNext() {
    history.push('/step5');
  }

  useEffect(() => {
    const features = store.getState().additionalFeatures;
  }, []);

  useEffect(() => {
    // let multiple = 0;
    // props.dispatch(setPageMultiple(multiple));
  }, [props, selections]);

  return (
    <div className="Step4">
      <div className="main-section">
        <p className="title">3단계, 기본 기능 외에 꼭 검증하고 
싶은 특별한 기능을 알려주세요.</p>
      </div>
      <div className="inner-section">
        <p className="title">04.필요한 추가 기능을 선택해보세요!</p>
        <p className="description">추가 기능을 통해 진행하시는 서비스가<br />
좀 더 다채로워 질 수 있어요!<br />
어떤 추가 기능 필요한지 고민해보시고 선택해주세요!<br />
<span>(중복 선택 가능합니다.)</span></p>
        <ContentCheckboxSmall
          title="GPS (내 주변)"
          description="200만원"
          checked={selections.gps === true}
          styles={{
            width: 'calc(100% - 24px)',
            marginTop: '40px',
          }}
          onClick={() => { setSelections({
            ...selections,
            gps: !selections.gps,
          }); }}
        />
        <ContentCheckboxSmall
          title="21P~30P"
          description="기본 금액 x2"
          checked={selections.map === true}
          styles={{
            width: 'calc(100% - 24px)',
            marginTop: '20px',
          }}
          onClick={() => { setSelections({
            ...selections,
            map: !selections.map,
          }); }}
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
          glow={true}
          disabled={true}
          onClick={goNext}>다음 단계</BaseButton>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return { pageMultiple: state.pageMultiple };
};

export default connect(mapStateToProps)(Step4)
