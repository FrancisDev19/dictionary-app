import React from 'react'
import {AiFillSound} from 'react-icons/ai'

const Results = ({ results }) => {

    return (
        <div className="mt-10">
            {
                results.map((result) => (
                <div key={result}>
                    <div className="flex items-center justify-between">
                        <div className="result">
                            <h2 className="text-2xl font-semibold capitalize"> {result.word} </h2>
                            <div className="mt-1 flex">
                                {
                                    result.meanings.map((meaning) => (
                                        <p key={meaning.partOfSpeech} className="opacity-50"> {meaning.partOfSpeech} /{result.phonetic}/ </p>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="pronunciation">
                            <button>
                                <AiFillSound size="1.5em" />
                            </button>
                        </div>
                    </div>
                    <div className="meaning p-5 mt-5 space-y-3 rounded-md border-purple-700 border-r-4">
                        <h4 className="text-xl font-semibold"> Meaning </h4>
                        {
                            result?.meanings[0]?.definitions?.map(meaning => (
                                <p key={meaning.partOfSpeech} className="opacity-80"> {meaning.definition} </p>
                            ))
                        }
                    </div>
                    <div className="example p-5 mt-5 space-y-3 rounded-md border-purple-700 border-r-4">
                        <h4 className="text-xl font-semibold"> Example </h4>
                        {
                            result?.meanings[0]?.definitions?.map(meaning => (
                                <p key={meaning.partOfSpeech} className="opacity-80"> {meaning.example} </p>
                            ))
                        }
                    </div>
                </div>
                ))
            }
        </div>
    )
}

export default Results
