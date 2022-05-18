
import './App.css';
import Feed from './Components/Feed';
import Header from './Components/Header';
import Login from './Components/Login';
// import MessageSender from './Components/MessageSender';
import Sidebar from './Components/Sidebar';
import Widgets from './Components/Widgets';
import { useStateValue } from './StateProvider';

function App() {
  const [{user},dispatch]= useStateValue();
  // const user=null;

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
