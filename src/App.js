import './App.css';
import { Display, Header } from './components';
import { Numbers, Top, Trigonometry } from './containers';

function App() {
  return (
    <div className="App">
      <Header />
      <Display />
      <Top />
      <Trigonometry />
      <Numbers />
    </div>
  )
}

export default App;