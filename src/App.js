import { useState } from 'react';
import './App.css';
import Modal from './components/Modal';

function App() {

  const[showModal, setShowModal]= useState(false)

  const handleConfig=()=>{
    setShowModal(true);
  }
  const removeConfig=()=>{
    setShowModal(false);
  }

  return (
    <div className="App">
      {showModal && <Modal removeConfig={removeConfig}/>}
      <h1 className="heading" style={{color:"#c23866"}}>Automatic Door System</h1>
      <div className="state-changes">
        <h3>Display Panel</h3>
        <p>Door's Current State - <span style={{fontWeight: "bold"}}>OPENING</span></p>
        <p>Person's Current State - <span style={{fontWeight: "bold"}}>APPROACHING</span></p>
      </div>
      <div className="button-1">
        <button className="config" onClick={()=>{handleConfig()}}>Set Configuration</button>
      </div>
      <div className="button-2">
        <button className="start">Start</button>
        <button className="off">Off</button>
      </div>
      <div className="button-3">
        <button className="input">Input</button>
      </div>
      <div className="button-4">
        <button className="em-start">Emergency Start</button>
        <button className="em-off">Emergency Off</button>
      </div>
      <div className="button-5">
        <button className="query">Queries?</button>
      </div>
    </div>
  );
}

export default App;
