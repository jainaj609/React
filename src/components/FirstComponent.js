import React from 'react'
import './CSS/FirstComponent.css'
import { useState } from 'react'
import FunctionComponent from './FunctionComponent';
import ClassComponent from './ClassComponent';

export default function FirstComponent() {

    const [firstbutton, setFirstbutton] = useState(false);
    const [secondbutton, setSecondbutton] = useState(false);

    const handleFunOne = () => {
        setFirstbutton(!firstbutton)
    }
    const handleFunTwo = () => {
        setSecondbutton(!secondbutton)
    }

    return (
        <div>
            <div className="container1" >
                <h1 className='heading'>Styling using Functional and Class Component</h1>
                <div className="btn_container">
                    <button onClick={handleFunOne} className='button' id='first_button'>To see styling in functional component</button>
                    <button onClick={handleFunTwo} className='button' id='second_button'>To see styling in class component</button>
                </div>
            </div>

            {firstbutton ? <FunctionComponent /> : null}
            {secondbutton ? <ClassComponent /> : null}

        </div>



    )
}
