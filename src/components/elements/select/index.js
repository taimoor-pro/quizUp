import React from 'react'
import { Form } from 'react-bootstrap'
import "./index.css";

const Select = (props) => {

    const { selected, margin, bgColor, field, padding, options } = props
    return (
        <Form.Select {...field} style={{
            margin: margin ? margin : "",
            padding: padding ? padding : ""
        }} className={`${bgColor ? 'bg-white custom-select border-1  rounded-none' : 'bg-black custom-select border-1  rounded-none'} `} aria-label="Default select example">
            <option>{selected}</option>
            {
                options.map((op, index) => <option key={index} value={op}>{op}</option>)
            }
        </Form.Select>
    )
}

export default Select