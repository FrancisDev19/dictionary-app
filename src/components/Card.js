import React from 'react'
import Search from './Search'

const Card = () => {

    return (
        <div className="max-w-lg m-20 p-10 bg-white shadow-md rounded-md">
            <h1 className="font-black text-2xl text-center uppercase mb-10">English Dictionary</h1>
            <Search/>
        </div>
    )
}

export default Card
