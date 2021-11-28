import React from 'react'
import {DiGithubAlt} from 'react-icons/di'

const Navbar = () => {
    return (
        <nav className="w-screen sticky p-10 flex justify-end shadow-sm">
            <a href="https://github.com/FrancisDev19"  target="_blank" rel="noreferrer">
                <DiGithubAlt size="3em" color="white"/>
            </a>
        </nav>
    )
}

export default Navbar
