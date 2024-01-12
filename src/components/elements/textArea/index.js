import React from 'react'

const TextArea = () => {
    return (
        <div className='mt-5'>
            <textarea className='bg-dark' rows="3" cols="90" placeholder='Comments' style={{ overflow: "hidden" }}></textarea>
        </div>
    )
}

export default TextArea