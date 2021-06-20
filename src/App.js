import { Route } from 'react-router-dom'

import './App.css';

import Header from './components/Header'
import StartPage from './StartPage'
import Step0 from './Step0'
import Step1 from './Step1'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Route path='/' component={StartPage} exact={true} />
      <Route path='/step0' component={Step0} />
      <Route path='/step1' component={Step1} />
    </div>
  );
}

export default App;
