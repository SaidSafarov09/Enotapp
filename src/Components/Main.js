/* eslint-disable react/jsx-no-undef */
import React, { useState, useEffect, useRef } from 'react';
import '../styles/main.scss';
import '../styles/checkbosx.scss';
import setting from '../img/Vector.png';
import Drop from './Drop';
import List from './List';
import Marquee from 'react-double-marquee';
import Ccomponent from '../Components/News';
import 'reactjs-popup/dist/index.css';




function Main(props) {
    
    
    


    return(
        <div className='main'>
            
            <div className='todo'>
                <header>
                    <h1>To Do</h1>
                        <button>
                            <img src={setting}/>
                        
                        </button>
                </header>
                <div className='today'>
                    <input type='checkbox'></input>
                    <p>Today Tasks:</p>
                </div>
                <div className='main_tasks'>
                        <Drop></Drop>
                </div> 
                <div className='next_tasks'>
                    <List>
                    </List>
                </div>                
            </div>
            <div className='marquee'>
            <Marquee>
                <div className='marquee_content'>
                News News News News News News News News News News News News News News News News News
                </div>
                <Ccomponent></Ccomponent>
            </Marquee>
            </div>
        </div>    
    );
};

export default Main;
