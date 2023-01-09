
import React from 'react'
import CreateQuiz from './CreateQuiz'
import PlayQuiz from './PlayQuiz'

export default function HomePage() {
  return (
    <>
        <h1 className='flex place-content-center text-4xl p-5 text-gray-700'>Quiz Application</h1>
        <CreateQuiz />
    </>
  )
}
