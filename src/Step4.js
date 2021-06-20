import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'

import './Step4.scss'

import ContentCheckboxSmall from './components/ContentCheckboxSmall'
import BaseButton from './components/BaseButton'
import store from './store/index'
import { setAdditionalFeatures } from './actions/index'

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

  const firstCheckboxStyle = {
    width: 'calc(100% - 24px)',
    marginTop: '40px',
  };

  const checkboxStyle = {
    width: 'calc(100% - 24px)',
    marginTop: '20px',
  };

  const features = [
    {
      title: 'GPS (내 주변)',
      description: '200만원',
      checkedKey: 'gps',
      styles: firstCheckboxStyle,
      onClick: () => { setSelections({
        ...selections,
        gps: !selections.gps,
      }); },
    },
    {
      title: '지도 (맵 커스텀)',
      description: '200만원',
      checkedKey: 'map',
      styles: checkboxStyle,
      onClick: () => { setSelections({
        ...selections,
        map: !selections.map,
      }); },
    },
    {
      title: '카카오톡 푸쉬',
      description: '200만원',
      checkedKey: 'kakaoPush',
      styles: checkboxStyle,
      onClick: () => { setSelections({
        ...selections,
        kakaoPush: !selections.kakaoPush,
      }); },
    },
    {
      title: '커뮤니티',
      description: '200만원',
      checkedKey: 'community',
      styles: checkboxStyle,
      onClick: () => { setSelections({
        ...selections,
        community: !selections.community,
      }); },
    },
    {
      title: '공유하기',
      description: '100만원',
      checkedKey: 'share',
      styles: checkboxStyle,
      onClick: () => { setSelections({
        ...selections,
        share: !selections.share,
      }); },
    },
    {
      title: '유저타입확장',
      description: '200만원',
      checkedKey: 'userTypeExpand',
      styles: checkboxStyle,
      onClick: () => { setSelections({
        ...selections,
        userTypeExpand: !selections.userTypeExpand,
      }); },
    },
    {
      title: '채팅(실시간)',
      description: '200만원',
      checkedKey: 'chat',
      styles: checkboxStyle,
      onClick: () => { setSelections({
        ...selections,
        chat: !selections.chat,
      }); },
    },
    {
      title: '필요없어요',
      description: '0원',
      checkedKey: 'none',
      styles: checkboxStyle,
      onClick: () => { setSelections({
        ...selections,
        none: !selections.none,
      }); },
    },
  ];

  const history = useHistory();

  function goBack() {
    history.goBack();
  }

  function goNext() {
    history.push('/step5');
  }

  useEffect(() => {
    const features = store.getState().additionalFeatures;
    if (features.gps === true) {
      setSelections({ ...selections, gps: true});
    }
    if (features.map === true) {
      setSelections({ ...selections, map: true});
    }
    if (features.kakaoPush === true) {
      setSelections({ ...selections, kakaoPush: true});
    }
    if (features.community === true) {
      setSelections({ ...selections, community: true});
    }
    if (features.share === true) {
      setSelections({ ...selections, share: true});
    }
    if (features.userTypeExpand === true) {
      setSelections({ ...selections, userTypeExpand: true});
    }
    if (features.chat === true) {
      setSelections({ ...selections, chat: true});
    }
    if (features.none === true) {
      setSelections({ ...selections, none: true});
    }
  }, []);

  useEffect(() => {
    props.dispatch(setAdditionalFeatures(selections));
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
<span style={{ color: '#226bef' }}>(중복 선택 가능합니다.)</span></p>
        {features.map(feature => <ContentCheckboxSmall key={feature.checkedKey}
          title={feature.title}
          description={feature.description}
          checked={selections[feature.checkedKey] === true}
          styles={feature.styles}
          onClick={feature.onClick} />)}
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
  return { additionalFeatures: state.additionalFeatures };
};

export default connect(mapStateToProps)(Step4)
