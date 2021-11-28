import React, { useEffect, useRef, useState } from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import {getWord} from '../services/getWord'
import Results from './Results'

const Search = () => {

    const inputRef = useRef();

    const [text, setText] = useState('Search a word');
    const [haveText, setHaveText] = useState(false);
    const [results, setResults] = useState([]);

    const getText = (e) => {
        setText(e.target.value);
    }

    const getResults = async () => {
        const {data} = await getWord(text);
        console.log(data);
        setResults(data);
    }

    const clearText = () => {
        setText("");
        setHaveText(false);
        inputRef.current.focus();
    }

    useEffect(() => {
        text ? setHaveText(true) : setHaveText(false);
    }, [text])

    return (
    <>
        <label className="block relative">
            <input 
                onKeyPress={(e) => e.key === "Enter" && getResults() }
                onClick={(e) => inputRef.current.select()}
                onBlur={getResults}
                ref={inputRef}
                onChange={getText}
                className="mt-1 w-full p-5 rounded-md border-gray-300 shadow-md focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 select-all" 
                type="text" 
                value={text}
            />
            {
                haveText
                ? 
                <button 
                    onClick={clearText}
                    className="absolute right-4 top-5"
                >
                    <AiOutlineClose size="1.5em"/>
                </button>
                :
                null
            }
        </label>
        <Results results={results} />
    </>
    )
}

export default Search
