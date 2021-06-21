import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'

import './Step5.scss'

import DetailContentCheckbox from './components/DetailContentCheckbox'
import BaseButton from './components/BaseButton'
import store from './store/index'
import { setAdmin } from './actions/index'

const Step5 = (props) => {
  const [selection, setSelection] = useState({
    inService: false,
    defaultAdmin: false,
    extendedAdmin: false,
    none: false,
  });

  const firstCheckboxStyle = {
    marginTop: '40px',
    marginLeft: '8px',
    marginRight: '8px',
  };

  const checkboxStyle = {
    marginTop: '20px',
    marginLeft: '8px',
    marginRight: '8px',
  };

  const adminTypes = [
    {
      title: '서비스 내에서 관리',
      detail: '관리자권한 부여',
      description: '100만원',
      checkedKey: 'inService',
      styles: firstCheckboxStyle,
      onClick: () => { setSelection({
        inService: true,
        defaultAdmin: false,
        extendedAdmin: false,
        none: false,
      }); },
    },
    {
      title: '기본 Admin',
      detail: '관리자 페이지 운영',
      description: '150만원',
      checkedKey: 'defaultAdmin',
      styles: checkboxStyle,
      onClick: () => { setSelection({
        inService: false,
        defaultAdmin: true,
        extendedAdmin: false,
        none: false,
      }); },
    },
    {
      title: '확장 Admin',
      detail: '관리자페이지+대쉬보드',
      description: '200만원',
      checkedKey: 'extendedAdmin',
      styles: checkboxStyle,
      onClick: () => { setSelection({
        inService: false,
        defaultAdmin: false,
        extendedAdmin: true,
        none: false,
      }); },
    },
    {
      title: '필요없어요.',
      detail: '해당 기능이 필요없어요.',
      description: '0만원',
      checkedKey: 'none',
      styles: checkboxStyle,
      onClick: () => { setSelection({
        inService: false,
        defaultAdmin: false,
        extendedAdmin: false,
        none: true,
      }); },
    },
  ];

  function isChecked() {
    return Object.values(selection).includes(true);
  }

  const history = useHistory();

  function goBack() {
    history.goBack();
  }

  function goNext() {
    history.push('/final');
  }

  useEffect(() => {
    const admin = store.getState().admin;
    if (admin.inService === true) {
      setSelection({
        inService: true,
        defaultAdmin: false,
        extendedAdmin: false,
        none: false,
      });
    }
    if (admin.defaultAdmin === true) {
      setSelection({
        inService: false,
        defaultAdmin: true,
        extendedAdmin: false,
        none: false,
      });
    }
    if (admin.extendedAdmin === true) {
      setSelection({
        inService: false,
        defaultAdmin: false,
        extendedAdmin: true,
        none: false,
      });
    }
    if (admin.none === true) {
      setSelection({
        inService: false,
        defaultAdmin: false,
        extendedAdmin: false,
        none: true,
      });
    }
  }, []);

  useEffect(() => {
    props.dispatch(setAdmin(selection));
  }, [props, selection]);

  return (
    <div className="Step5">
      <div className="main-section">
        <p className="title">3단계, 기본 기능 외에 꼭 검증하고 
싶은 특별한 기능을 알려주세요.</p>
      </div>
      <div className="inner-section">
        <p className="title">05. 관리자 페이지를 선택해주세요!</p>
        <p className="description">관리자 페이지는 앱을 관리하기 위해<br />
유용하게 사용되는 페이지에요! 직접 DB를 관리하거나 관리가<br />
필요 없는게 아니라면 꼭 선택해야 하는 기능이에요!</p>
        {adminTypes.map(type => <DetailContentCheckbox key={type.checkedKey}
          title={type.title}
          detail={type.detail}
          description={type.description}
          checked={selection[type.checkedKey] === true}
          styles={type.styles}
          onClick={type.onClick} />)}
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
          fontColor={'#ffffff'}
          backgroundColor={'#226bef'}
          glow={isChecked()}
          disabled={!isChecked()}
          onClick={goNext}>견적 산출</BaseButton>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return { admin: state.admin };
};

export default connect(mapStateToProps)(Step5)
