import React from 'react';
import {useState} from 'react'
import './App.css';
import Header from './components/header';
import Cursor from './components/carsour';
import Cards from './components/card';
import Button from './components/btns';
import {Data} from './components/cardContent'
import Footer from './components/footer'
import 'bootstrap/dist/css/bootstrap.min.css';
  let dataC= new Set(Data.map(item => item.cateogry))
  const all = ['Whole', ...dataC];
function App() {
  const [allItems, setMenuItem] = useState(Data);
  const [btnsName, ] = useState(all);

  const filter = (button) =>{

    if(button === 'Whole'){
      setMenuItem(Data);
      return;
    }

    const filteredData = Data.filter(item => item.cateogry ===  button);
    setMenuItem(filteredData)
  }
  return (
    <>
    <Header/>
    <Cursor/>
    <Button button={btnsName} filter={filter} />
    <Cards menuItem={allItems}/>
    <Footer/>
    </>
  );
}

export default App;
