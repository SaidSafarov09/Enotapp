/* eslint-disable react/jsx-no-undef */
import React, { useState, useEffect, useRef } from 'react';
import '../styles/main.scss';
import '../styles/checkbox.scss';
import setting from '../img/Vector.png';
import Drop from './Drop';
import List from './List';
import Marquee from 'react-double-marquee';
import Ccomponent from '../Components/News';
import 'reactjs-popup/dist/index.css';
import Example from './List';



function Main(props) {
    
    
    const [isOpen, setIsOpen] = useState(false);

    const [on, setOn] = useState(true);


    const checkList = ['Реклама вкл.']
    const [checked, setChecked] = useState([]);
    const handleCheck = (event) => {
        var updatedList = [...checked];
        if (event.target.checked) {
          updatedList = [...checked, event.target.value];
        } else {
          updatedList.splice(checked.indexOf(event.target.value), 5);
        }
        setChecked(updatedList);
      };

    const isChecked = (item) =>
    checked.includes(item) ? "not-checked-item" : "checked-item";

    
    return(
        <div className='main'>
            
            <div className='todo'>
                <header>
                    <h1>To Do</h1>
                    <button onClick={() => setIsOpen(!isOpen)}><img src={setting}/></button>
                    {isOpen && (
                        <div className='switch_buttons'>
                            {checkList.map((item, index) => (
                            <button key={index} onClick={() => 
                                setOn(!on)} 
                                value={item} 
                                 >
                                    
                                <span className={isChecked(item)}>
                                    <input type='checkbox' value={item} onChange={handleCheck} >
                                    </input>
                                    {item}
                                </span>
                            </button>))}
                        </div>
                    )}
                </header>
                <div className='today'>
                    <input type='checkbox'></input>
                    <p>Today Tasks:</p>
                </div>
                <div className='main_tasks'>    
                    <div>
                        <Drop></Drop>
                        </div>
                </div> 
                <div className='next_tasks'>
                    <div className='example'>    
                        <List></List>
                    </div>
                </div>                
            </div>
            {on && <div className='marquee'>
            <Marquee>
                <div className='marquee_content'>
                News News News News News News News News News News News News News News News News News
                </div>
                (<Ccomponent></Ccomponent>)
            </Marquee>
            </div>}
        </div>    
    );
};

export default Main;
