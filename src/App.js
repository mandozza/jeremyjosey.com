import React from 'react';
import NavigationBar from './components/macros/NavigationBar'
import ContentArea from './components/macros/ContentArea'
import Footer from './components/macros/Footer'
import './App.scss';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <ContentArea/>
      <Footer/>
    </div>
  );
}

export default App;
