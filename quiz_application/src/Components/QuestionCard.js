import React from 'react'

export default function QuestionCard() {
  return (
    <div className='flex place-content-center'>
      <div className='w-4/5 shadow-xl p-5'>
        <h1 className='text-center text-4xl p-5'>Question</h1>
        <div className='p-5'>
            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-none rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Descripe the question" required />
        </div>
        <label htmlFor="option" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Options : </label>
        <div className="grid grid-cols-2 gap-4 p-5">
          <div className='flex place-items-center'>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-none rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Option 1" required />
            <input id="default-radio-1" type="radio" value="" name="default-radio" className="m-3 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" defaultChecked/>
          </div> 
          <div className='flex place-items-center'>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-none rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Option 2" required />
            <input id="default-radio-2" type="radio" value="" name="default-radio" className="m-3 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          </div>  
          <div className='flex place-items-center'> 
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-none rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Option 3" required />
            <input id="default-radio-3" type="radio" value="" name="default-radio" className="m-3 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          </div>
          <div className='flex place-items-center'>  
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:outline-none rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Option 4" required />
            <input id="default-radio-4" type="radio" value="" name="default-radio" className="m-3 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          </div>
        </div>
      </div>
    </div>
  )
}
