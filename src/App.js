import React, {useState} from 'react';
import { Navbar } from './components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom'
import GlobalStyle from './globalStyle';
import { Hero } from './components/Hero';
import { SliderData } from './data/SliderData';
import { Dropdown } from './components/Dropdown';
import { InfoData } from './data/infoData';
import { InfoSection } from './components/infoSection';

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
    <GlobalStyle/>
    <Router>

    <Navbar toggle={toggle}/>
    <Dropdown isOpen={isOpen} toggle={toggle} />
    <Hero slides={SliderData} />
    <InfoSection {...InfoData}/>
    </Router>
    </>
  );
}

export default App;
