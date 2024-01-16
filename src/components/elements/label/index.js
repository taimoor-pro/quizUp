import React from 'react';
import { AiFillEye } from 'react-icons/ai';


const Label = (props) => {

    const { text, color, fontWeight, fontSize, margin } = props

    return (

        <div className='d-flex justify-content-between' >

            <label htmlFor="label" style={{ color: color ? color : "white", fontSize: fontSize ? fontSize : "18px", fontWeight: fontWeight ? fontWeight : "bold", margin: margin ? margin : "" }}>{text}</label>

        </div>


    );
}

export default Label;