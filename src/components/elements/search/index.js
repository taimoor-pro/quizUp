import React from 'react';
import { AiFillEye } from 'react-icons/ai';
import { Input } from 'reactstrap';


const Search = (props) => {

    const { type, field, id, placeholder, textColor, fontSize, fontWeight, padding, fontFamily, margin } = props

    return (

        <>
             <Input style={{width:"30%"}} className='w-10' bsSize='md' placeholder={placeholder} />

        </>

    );
}

export default Search;