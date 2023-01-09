import React from 'react'
import QuizzQuestions from './QuizzQuestions.js'

export default function QuizzScreen (props) {
    const questionsArray = props.quizzData.map((dataInstance, index) => {
        let allAnswers = [dataInstance.correct_answer, dataInstance.incorrect_answers]
            .flat()
            .sort(() => Math.random() - 0.5)
            return {
                id: index,
                question: dataInstance.question
                    .replace(/&#039;/g, "\'")
                    .replace(/&quot;/g, '\"')
                    .replace(/&ldquo;/g, "\“")
                    .replace(/&rsquo;/g, "\’")
                    .replace(/&rdquo;/g, "\”")
                    .replace(/&hellip;/g, "\…")
                    .replace(/&amp;/g, "\&")
                    .replace(/&Eacute;/g, "\É")
                    .replace(/&eacute;/g, "\é")
                    .replace(/&iacute;/g, "\í")
                    .replace(/&uuml;/g, "\ü")
                    .replace(/&ouml;/g, "\ö"),
                correct_answer: dataInstance.correct_answer
                    .replace(/&#039;/g, "\'")
                    .replace(/&quot;/g, '\"')
                    .replace(/&ldquo;/g, "\“")
                    .replace(/&rsquo;/g, "\’")
                    .replace(/&rdquo;/g, "\”")
                    .replace(/&hellip;/g, "\…")
                    .replace(/&amp;/g, "\&")
                    .replace(/&Eacute;/g, "\É")
                    .replace(/&eacute;/g, "\é")
                    .replace(/&iacute;/g, "\í")
                    .replace(/&uuml;/g, "\ü")
                    .replace(/&ouml;/g, "\ö"),
                answers: allAnswers
            }
        }
    )   
    console.log(questionsArray)
    return (
        <main className="quiz-screen-main">
            <QuizzQuestions 
                quizzData={props.quizzData} 
                questionsArray={questionsArray}
            />
            
        </main>
    )
    
}

// below code replaces incorrect characters in data
// .replace(/&#039;/g, "\'").replace(/&quot;/g, '\"').replace(/&ldquo;/g, "\“").replace(/&rsquo;/g, "\’").replace(/&rdquo;/g, "\”").replace(/&hellip;/g, "\…").replace(/&amp;/g, "\&").replace(/&Eacute;/g, "\É").replace(/&iacute;/g, "\í").replace(/&uuml;/g, "\ü").replace(/&ouml;/g, "\ö")