import { useEffect, useState } from "react"
import { answers } from "../../data"

export default function AnswerBlock(props) {
    const [percent, setPersent] = useState(0)
    const [totalCount, setTotalCount] = useState(0)


    useEffect(() => {
        let totalRightAnswer = 0;

        for (let i = 0; i < answers.length; i++) {
            for (let j = 0; j < answers[i].length; j++) {
                if (answers[i][j] === 'on') {
                    totalRightAnswer = totalRightAnswer + 1
                }
            }
        }
        setTotalCount(totalRightAnswer)
        const totalPercent = +props.isCorrect * 100 / totalRightAnswer
        setPersent(totalPercent)

    }, [])

    return (
        <section style={{ marginBottom: '1rem' }}>
            <div style={{ border: '1px solid black', padding: '10px 7px', borderRadius: '10px' }}>
                <h2>Итоги теста:</h2>
                <h4>правильных ответов: <span style={{ color: 'forestGreen' }}>{props.isCorrect}</span> из {totalCount} </h4>
                <h4>вы сдали тест на: <span style={{ color: 'forestGreen' }} >{parseInt(percent)}  %</span> </h4>
            </div>
        </section>
    )
}