import { Route } from 'react-router-dom'

import './App.css';

import Header from './components/Header'
import StartPage from './StartPage'
import Step0 from './Step0'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Route path='/' component={StartPage} exact={true} />
      <Route path='/step0' component={Step0} />
    </div>
  );
}

export default App;
