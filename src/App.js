import { Route } from 'react-router-dom'

import './App.css';

import Header from './components/Header'
import StartPage from './StartPage'
import Step0 from './Step0'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Route path='/' component={StartPage} exact={true} />
      <Route path='/step0' component={Step0} />
      <Route path='/step1' component={Step1} />
      <Route path='/step2' component={Step2} />
      <Route path='/step3' component={Step3} />
    </div>
  );
}

export default App;
