import React from 'react'
import ControlQuestionCard from '../Components/ControlQuestionCard'
import QuestionCard from '../Components/QuestionCard'

export default function CreateQuiz() {
  return (
    <div className='flex place-items-center'>
        <div className='w-full'>
            <QuestionCard />
            <ControlQuestionCard />
        </div>
    </div>
  )
}
