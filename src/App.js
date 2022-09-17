
import React from 'react'
import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';
import SearchPage from './SearchPage';
import './App.css';
import{ BrowserRouter as Router, Switch, Route } from "react-router-dom"
import VideoPlayer from './VideoPlayer';

function App() {

  return (
    <div className='app'>
      <Router>
        <Header/>   
        <Switch>
          <Route path='/video/:videoId'>
            <div className='main'>
              <Sidebar />
              <VideoPlayer />
            </div>
          </Route>
          <Route path='/search/:searchQuery'>
            <main className='main'>
              <Sidebar />
              <SearchPage  />
            </main>
          </Route>
          <Route path='/'>
            <main className='main'>        
              <Sidebar />
              <Content />
            </main>
          </Route>
        </Switch>
      </Router>

      
    </div>
  );
}

export default App;
