import './App.css';
import React from 'react';
// import Header from './Components/Header' 
import Home from './Components/Home';
import Bookmark from './Components/Bookmark';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Header/> */}
      </header>

        <Router>
          <Routes>
            <Route path='/'element={ <Home/>}/>
            <Route path='/Bookmark'element={ <Bookmark/>}/>

            </Routes>
        </Router>
    
    </div>
  );
}

export default App;
