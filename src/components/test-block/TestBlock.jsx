import QuestionBlock from "../questionBlock/QuestionBlock";
import {questions} from "../../data"


export default function TestBlock(props){
    return (
        <section className="test-block">
            <ol style={{paddingLeft: '15px'}}>
                {questions.map((question) => <QuestionBlock isCount={props.count} key={question.id} {...question}/>)}
            </ol>
        </section>
    )
}
