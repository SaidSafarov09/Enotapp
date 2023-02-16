import React, { useState, useEffect, useRef } from 'react';
import arrow from '../img/arrow.png';
import '../styles/list.scss';
import Drop from "./Drop";
import '../styles/main.scss';



const First = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div>
        <div className="list">
        <div className="list_container">
                <div className="list_content">
                <div className="line"></div>
                <div className="list_text">
                    <span>Tommorow Tasks</span>
                    <button onClick={() => setIsOpen(!isOpen)}><img src={arrow}/></button>
                </div>
                </div>
            </div>
          
          {isOpen && (
            <div className="list-container">
              <Drop></Drop>
            </div>
          )}
        </div>
        
      </div>
    );
  };
  
  const Second = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div>
        <div className="list">
        <div className="list_container">
                <div className="list_content">
                <div className="line"></div>
                <div className="list_text">
                    <span>09/07 Tasks</span>
                    <button onClick={() => setIsOpen(!isOpen)}><img src={arrow}/></button>
                </div>
                </div>
            </div>
          
          {isOpen && (
            <div className="list-container">
              <Drop></Drop>
            </div>
          )}
        </div>
      </div>
    );
  };

  const Three = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div>
        <div className="list">
        <div className="list_container">
                <div className="list_content">
                <div className="line"></div>
                <div className="list_text">
                    <span>10/07 Tasks</span>
                    <button onClick={() => setIsOpen(!isOpen)}><img src={arrow}/></button>
                </div>
                </div>
            </div>
          
          {isOpen && (
            <div className="list-container">
              <Drop></Drop>
            </div>
          )}
        </div>
      </div>
    );
  };

  const Four = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div>
        <div className="list">
        <div className="list_container">
                <div className="list_content">
                <div className="line"></div>
                <div className="list_text">
                    <span>11/07 Tasks</span>
                    <button onClick={() => setIsOpen(!isOpen)}><img src={arrow}/></button>
                </div>
                </div>
            </div>
          
          {isOpen && (
            <div className="list-container">
              <Drop></Drop>
            </div>
          )}
        </div>
      </div>
    );
  };

  const Five = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div>
        <div className="list">
        <div className="list_container">
                <div className="list_content">
                <div className="line"></div>
                <div className="list_text">
                    <span>12/07 Tasks</span>
                    <button onClick={() => setIsOpen(!isOpen)}><img src={arrow}/></button>
                </div>
                </div>
            </div>
          
          {isOpen && (
            <div className="list-container">
              <Drop></Drop>
            </div>
          )}
        </div>
      </div>
    );
  };

  


  
  export default function App() {
    const [component, setComponent] = useState("first");
  
    return (
      <>
        <First />
        <Second />
        <Three />
        <Four />
        <Five />
      </>
    );
  }
  