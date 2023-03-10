import React from 'react'

export default function ControlQuestionCard() {
  return (
    <div className='flex place-content-center p-5'>
        <div className="inline-flex">
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                Prev
            </button>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-600 font-bold py-2 px-4 w-48 rounded">
                Save
            </button>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                Next
            </button>
        </div>
    </div>
  )
}
