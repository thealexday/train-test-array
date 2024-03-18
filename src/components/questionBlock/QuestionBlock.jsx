import './questionBlock.css'
import Button from '../button/Button'
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import {answers} from '../../data'



export let countTrue = 0
export default function QuestionBlock(props) {
    const [answer, setAnswer] = useState(['off', 'off', 'off', 'off', 'off', 'off']);
    const [answerButton, setAnswerButton] = useState(false);
    const compAnswerRef = useRef([])
    const ulIdRef = useRef('ul')


    function handleClick(event) {
        const newArray = [...answer];
        newArray.splice(event.target.id, 1, event.target.value)
        setAnswer(newArray)
    }

    function buttonHandleClick() {
        compAnswerRef.current = ([answer]) // Готовый массив из ответов пользователя в одном компоненте

        for(let i = 0; i < 6; i++){
            if(compAnswerRef.current[0][i] === answers[Number(ulIdRef.current.id)][i] && compAnswerRef.current[0][i]=== 'on'){
                countTrue++
                ulIdRef.current.children[i]?.classList.add('li-green')
            } else if(compAnswerRef.current[0][i] !== answers[Number(ulIdRef.current.id)][i] && compAnswerRef.current[0][i] === 'on'){
                ulIdRef.current.children[i]?.classList.add('li-red')
            } else if(compAnswerRef.current[0][i] === answers[Number(ulIdRef.current.id)][i] && compAnswerRef.current[0][i] !== 'on'){
                ulIdRef.current.children[i]?.classList.add('li-red')
            } else {
                ulIdRef.current.children[i]?.classList.add('li-green')
            }
        }   
        setAnswerButton(true)
    }

    return (
        <section className="question-block">

            <li style={{ border: '1px solid black', padding: '3px 5px', borderRadius: '10px', marginBottom: '1rem' }}>
                <h5 style={{ marginBottom: '1rem' }}>{props.question}</h5>
                <ul id={props.id} ref={ulIdRef} className='questionUl'>
                    <li className='questionLi'>
                        <label className='questionLabel' htmlFor="1">{props.answer1}</label>
                        <input  onClick={handleClick} className='questionInput'  id="0" type="radio" /> <br />
                    </li>
                    <li className='questionLi'>
                        <label className='questionLabel' htmlFor="2">{props.answer2}</label>
                        <input onClick={handleClick} className='questionInput' id="1" type="radio" /> <br />
                    </li>
                    <li className='questionLi'>
                        <label className='questionLabel' htmlFor="3">{props.answer3}</label>
                        <input onClick={handleClick} className='questionInput' id="2" type="radio" /> <br />
                    </li>
                    {props.answer4 && <li className='questionLi'>
                        <label className='questionLabel' htmlFor="4">{props.answer4}</label>
                        <input onClick={handleClick} className='questionInput' id="3" type="radio" /> <br />
                    </li>}
                    {props.answer5 && <li className='questionLi'>
                        <label className='questionLabel' htmlFor="5">{props.answer5}</label>
                        <input onClick={handleClick} className='questionInput' id="4" type="radio" /> <br />
                    </li>}
                    {props.answer6 && <li className='questionLi'>
                        <label className='questionLabel' htmlFor="6">{props.answer6}</label>
                        <input onClick={handleClick} className='questionInput' id="5" type="radio" /> <br />
                    </li>}
                    
                    <Button disabled={answerButton} onClick={buttonHandleClick}>Готово</Button>
                </ul>
            </li>
        </section>
    )
}







