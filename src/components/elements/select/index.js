import React from 'react'
import { Form } from 'react-bootstrap'
import "./index.css";

const Select = (props) => {

    const { selected, margin } = props
    return (
        <Form.Select style={{
            margin: margin ? margin : ""
        }} className='bg-black custom-select border-1  rounded-none' aria-label="Default select example">
            <option>{selected}</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </Form.Select>
    )
}

export default Select