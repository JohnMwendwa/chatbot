import {Routes,Route} from 'react-router-dom';
import ChatRoom from './components/ChatRoom';
import RegisterForm from './components/RegisterForm';
import './assets/css/App.css'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<RegisterForm />} />
        <Route path='/chat' element={<ChatRoom/>} />
      </Routes>
    </div>
  );
}

export default App;
