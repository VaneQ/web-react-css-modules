import React from 'react'
import Banner from './components/banner/Banner';
import Driver from './components/driver/Driver';
import Find from './components/find/Find';
import Footer from './components/footer/Footer';
import Luxury from './components/luxury/Luxury';
import Nabvar from './components/navbar/Nabvar';

function App() {
  return (
    <div className="App">
        <Nabvar/>
        <Banner/>
        <Find/>
        <Driver/>
        <Luxury/>
        <Footer/>
    </div>
  );
}

export default App;
