import React, { useState, useEffect, useRef } from 'react';
import arrow from '../img/arrow.png';
import '../styles/list.scss';
import Drop from "./Drop";

function List() {
    

    return(
        <div className="list">
            <div className="list_container">
                <div className="list_content">
                <div className="line"></div>
                <div className="list_text">
                    <span>Tommorow Tasks</span>
                    <button onClick={''} 
                    >
                        <img src={arrow}/>
                    </button>
                </div>
                </div>
            </div>

            <div className="list_container">
                <div className="list_content">
                <div className="line"></div>
                <div className="list_text">
                    <span>09/07 Tasks</span>
                    <button onClick={''} 
                    >
                        <img src={arrow}/>
                    </button>
                </div>
                </div>
            </div>

            <div className="list_container">
                <div className="list_content">
                <div className="line"></div>
                <div className="list_text">
                    <span>10/07 Tasks</span>
                    <button onClick={''} 
                    >
                        <img src={arrow}/>
                    </button>
                </div>
                </div>
            </div>

            <div className="list_container">
                <div className="list_content">
                <div className="line"></div>
                <div className="list_text">
                    <span>11/07 Tasks</span>
                    <button onClick={''} 
                    >
                        <img src={arrow}/>
                    </button>
                </div>
                </div>
            </div>

            <div className="list_container">
                <div className="list_content">
                <div className="line"></div>
                <div className="list_text">
                    <span>12/07 Tasks</span>
                    <button onClick={''} 
                    >
                        <img src={arrow}/>
                    </button>
                </div>
                </div>
            </div>
        </div>
        
    )
}

export default List;