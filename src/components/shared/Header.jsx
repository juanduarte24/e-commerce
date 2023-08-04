import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <header>
            <Link to='/'>
                <h1>e-comerce</h1>
            </Link>
            <nav>
                <ul>
                    <li>Login</li>
                </ul>
            </nav>
        </header>
    )
}