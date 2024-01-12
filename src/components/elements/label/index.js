import React from 'react';
import { AiFillEye } from 'react-icons/ai';


const Label = (props) => {

    const { text } = props

    return (

        <div className='d-flex justify-content-between' >

            <label htmlFor="label" style={{ color: "white", fontSize:"18px", fontWeight:"bold" }}>{text}</label>

        </div>


    );
}

export default Label;