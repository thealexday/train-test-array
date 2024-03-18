import Button from "./components/button/Button"
import Header from "./components/header/Header"
import TestBlock from "./components/test-block/TestBlock"
import AnswerBlock from "./components/answerBlock/AnswerBlock"
import "./index.css"
import { countTrue } from "./components/questionBlock/QuestionBlock"

import { useState } from "react"
import TestTime from "./components/testTime/TestTime"

export default function App(){
  const [showBlock, setShowBlock] = useState(false)
  const [count, setCount] = useState(false)

  

  function mainButtonClick(){
    
    setShowBlock(true)
  }

  function handleClick(){
    document.querySelectorAll('.li-green').forEach(el => el.style.backgroundColor = 'rgb(136, 198, 143)')
    document.querySelectorAll('.li-red').forEach(el => el.style.backgroundColor = 'rgb(225, 149, 149)')
    setCount(true)
  }
  
  return (
    <div className="container">
      <Header/>
      <section className="main-button-block">
        <Button disabled={showBlock} onClick={mainButtonClick}>Начать тест</Button>
      </section>
      {showBlock && (<>
        <TestTime/>
        <TestBlock count={count}/>
        <section className="main-button-block-2">
        <Button disabled={count} onClick={handleClick}>Закончить тест</Button>
      </section>
      </>)}
      {count && <AnswerBlock isCorrect={countTrue}/>}  
    </div>
  )
}