import React, { useState, useEffect, useRef } from 'react';
import '../styles/main.scss';
import '../styles/checkbosx.scss';


function Drop () {

    const checkList1 = ['Visit David']
    const checkList2 = ['Goceries For Dinner']
    const checkList3 = ['Fix Dad`s iPad']

    const [checked, setChecked] = useState([]);
    const handleCheck = (event) => {
        var updatedList = [...checked];
        if (event.target.checked) {
          updatedList = [...checked, event.target.value];
        } else {
          updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
      };

    const isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item"; 
    return(
        <div className="list-container">
                               <div>
                               {checkList1.map((item, index) => (
                                    <div key={index} className='list-container_content'>
                                        <div className='line_red'></div> 
                                        <div className='list-container_content_text'>
                                           <div className='text_column'> 
                                            <span className={isChecked(item)}>{item}</span>
                                            <p>Lorem Ipsum Dolor Sit met...</p>
                                            </div>
                                        </div>
                                        <label class="toggle-control">
                                            <input value={item} type="checkbox" onChange={handleCheck} />
                                            <span class="control"></span>
                                        </label>
                                        
                                     </div>
                                 ))}</div>
                            <div>
                               {checkList2.map((item, index) => (
                                    <div key={index} className='list-container_content'>
                                        <div className='line_blue'></div> 
                                        
                                        <div className='list-container_content_text'>
                                           <div className='text_column'> 
                                            <span className={isChecked(item)}>{item}</span>
                                            <p>Lorem Ipsum Dolor Sit met...</p>
                                            </div>
                                        </div>
                                        <label class="toggle-control">
                                            <input value={item} type="checkbox" onChange={handleCheck} />
                                            <span class="control"></span>
                                        </label>
                                        
                                     </div>
                                 ))}</div>
                            <div>
                               {checkList3.map((item, index) => (
                                    <div key={index} className='list-container_content'>
                                        <div className='line_yellow'></div> 
                                        
                                        <div className='list-container_content_text'>
                                           <div className='text_column'> 
                                            <span className={isChecked(item)}>{item}</span>
                                            <p>Lorem Ipsum Dolor Sit met...</p>
                                            </div>
                                        </div>
                                        <label class="toggle-control">
                                            <input value={item} type="checkbox" onChange={handleCheck} />
                                            <span class="control"></span>
                                        </label>

                                     </div>
                                 ))}</div>
                        </div>
    )
}

export default Drop;