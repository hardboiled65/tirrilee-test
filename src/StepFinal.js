import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'

import './StepFinal.scss'

import BaseButton from './components/BaseButton'
import store from './store/index'

const StepFinal = () => {
  const [serviceType, setServiceType] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);

  const featurePrices = {
    additionalFeatures: {
      gps: 200,
      map: 200,
      kakaoPush: 200,
      community: 200,
      share: 100,
      userTypeExpand: 200,
      chat: 200,
      none: 0,
    },
    admin: {
      inService: 100,
      defaultAdmin: 150,
      extendedAdmin: 200,
      none: 0,
    },
  };

  function calculatePrice() {
    let basePrice = 0;
    let featurePrice = 0;

    basePrice += store.getState().serviceTypePrice;
    basePrice += store.getState().detailPlanPrice;
    basePrice += store.getState().designPrice;
    basePrice = basePrice * store.getState().pageMultiple;

    const additionalFeatures = store.getState().additionalFeatures;
    featurePrice += additionalFeatures.gps
      ? featurePrices.additionalFeatures.gps
      : 0;
    featurePrice += additionalFeatures.map
      ? featurePrices.additionalFeatures.map
      : 0;
    featurePrice += additionalFeatures.kakaoPush
      ? featurePrices.additionalFeatures.kakaoPush
      : 0;
    featurePrice += additionalFeatures.community
      ? featurePrices.additionalFeatures.community
      : 0;
    featurePrice += additionalFeatures.share
      ? featurePrices.additionalFeatures.share
      : 0;
    featurePrice += additionalFeatures.userTypeExpand
      ? featurePrices.additionalFeatures.userTypeExpand
      : 0;
    featurePrice += additionalFeatures.chat
      ? featurePrices.additionalFeatures.chat
      : 0;

    const admin = store.getState().admin;
    if (admin.inService === true) {
      featurePrice += featurePrices.admin.inService;
    } else if (admin.defaultAdmin === true) {
      featurePrice += featurePrices.admin.defaultAdmin;
    } else if (admin.extendedAdmin === true) {
      featurePrice += featurePrices.admin.extendedAdmin;
    }

    const total = basePrice + featurePrice;

    return total;
  }

  useEffect(() => {
    const serviceTypePrice = store.getState().serviceTypePrice;
    if (serviceTypePrice === 300) {
      setServiceType('App');
    } else if (serviceTypePrice === 400) {
      setServiceType('Web');
    }
  }, []);

  useEffect(() => {
    setTotalPrice(calculatePrice());
  }, []);

  const history = useHistory();

  function goFirst() {
    history.push('/');
  }

  return (
    <div className="StepFinal">
      <div className="result">
        <div>수고하셨습니다.</div>
        <div style={{ color: '#226bef' }}>선택 프로젝트 : { serviceType }</div>
        <div style={{ color: '#226bef' }}>견적 가격 : 대략 { totalPrice }만원</div>
        <div>입니다.</div>
      </div>
      <div className="detail">하지만 정확한 견적은 아니에요 :)<br />
티릴리와 함께 같이 진단해보고 멋진 서비스를 만들어보아요.</div>
      <BaseButton
        bold={true}
        glow={true}
        styles={{
          width: 'calc(100% - 24px)',
          margin: 'auto',
        }}
        onClick={goFirst}>다시하기
      </BaseButton>
    </div>
  );
}


export default connect()(StepFinal)
