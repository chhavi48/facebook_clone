
import './App.css';
import Feed from './Components/Feed';
import Header from './Components/Header';
import Login from './Components/Login';
// import MessageSender from './Components/MessageSender';
import Sidebar from './Components/Sidebar';
import Widgets from './Components/Widgets';

function App() {
  const user="chhavi";

  return (
    <div className="App">
     {!user ? 
     (<Login/>
     ):(
       <>
                  <Header/>
           <div className='app_body'>
             <Sidebar/>
             <Feed/>
            <Widgets/>
           </div>
       </>

     )}
   
    </div>

  );

}

export default App;
