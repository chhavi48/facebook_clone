
import './App.css';
import Feed from './Components/Feed';
import Header from './Components/Header';
// import MessageSender from './Components/MessageSender';
import Sidebar from './Components/Sidebar';
import Widgets from './Components/Widgets';

function App() {
  return (
    <div className="App">
    facebook baba
    <Header/>
    <div className='app_body'>
      <Sidebar/>
      <Feed/>
     <Widgets/>
    </div>
    </div>
  );
}

export default App;
