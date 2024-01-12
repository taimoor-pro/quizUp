import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    const { id, feildsData, logo, button, title } = props
    return (
        <>
            <div>
                <h1>{title}</h1>
                <ul>
                    {feildsData.map((user) => (
                        <li key={user.id}>
                            <Link to={user.url}>{user.link}</Link>
                        </li>
                    ))}
                    {button.map((btn) => (
                        <li key={btn.id}>
                            <button>{btn.buttonText}</button>
                        </li>
                    ))}
                </ul>
            </div>

        </>
    )
}

export default Navbar