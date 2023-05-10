import React from 'react';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Content from './components/content';

const App = () =>{
  return (
   <div className='App'> 
  <Header /> 
  <div className='container'>
  <Sidebar />
  <Content /> 
  </div>
    </div>
  );
  
}

export default App;
