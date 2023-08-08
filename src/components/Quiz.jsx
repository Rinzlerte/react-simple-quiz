import React, { useState } from 'react'
import './quiz.css'
import Game from './Game';
import Res from './Res';

const questions = [
  {
    title: 'React - is ... ?',
    variants: ['library', 'framework', 'application'],
    correct: 0,
  },
  {
    title: 'Component - is ... ',
    variants: ['application', 'part of application or web page', 'its, a think i dont know'],
    correct: 1,
  },
  {
    title: 'What is JSX?',
    variants: [
      'Simple HTML',
      'Function',
      'Its like HTML, but with power to change JS-code',
    ], 
    correct: 2,
  },
];
const Quiz = () => {
    const [step, setStep]= useState(0);
    const question = questions[step];
    const [correct, setCorrect] = useState(0);
    const chooseVariant =(index)=>{
      if (step !== questions.length) {
        setStep(prev => prev + 1);
      } 
      if (index === question.correct) {
        setCorrect(prev=> prev + 1);
      }
    }
    const percentageFill = Math.round((step / questions.length * 100));

    const restartQuis =()=> {
        setStep(0);
        setCorrect(0);
    }
    
  return (
    <div className='quise-container'>
      {
        step !== questions.length 
          ? <Game percent={percentageFill} question={question} questions={questions} choose={chooseVariant}/>
          : <Res correct={correct} all={questions.length} restart={restartQuis}/>
      }
    </div>
  )
}

export default Quiz