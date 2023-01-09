import React from 'react'
import QuizzAnswers from './QuizzAnswers.js'

export default function QuizzQuestions (props) {
    
    const [selectedAnswers, setSelectedAnswers] = React.useState(
        {Q0: "Q0", Q1: "Q1", Q2: "Q2", Q3: "Q3", Q4: "Q4"}
        )
    const [answersNumber, setAnswersNumber] = React.useState(0)
    const [gameOn, setGameOn] = React.useState(true)                                
        
    const verification = {
        Q0: props.quizzData[0].correct_answer,
        Q1: props.quizzData[1].correct_answer, 
        Q2: props.quizzData[2].correct_answer,
        Q3: props.quizzData[3].correct_answer,
        Q4: props.quizzData[4].correct_answer
    }
    
    function checkAnswers() {
        if (gameOn === false) {
            document.location.reload()
        }
        
        setGameOn(false)
        let correctAnswerNumber = 0;
        for (let i = 0; i < 5; i++) {
            if (verification[`Q${i}`] === selectedAnswers[`Q${i}`]){
                correctAnswerNumber++                
            };  
        }
        setAnswersNumber(correctAnswerNumber);    
    }
    
    function addAnswerToSelectionArray(answer, id) {
        setSelectedAnswers(prevVal => {
            return {...prevVal, [`Q${id}`]: answer}
            })
    }
       
    const display = props.questionsArray.map((questionInstance, index) => {
        return (
            <section className="question-container" key={questionInstance.id}>
                <div>{questionInstance.question}</div>
                <QuizzAnswers 
                    questionInstance={questionInstance}
                    qId={index} 
                    arrayFunction={addAnswerToSelectionArray}
                    gameOn={gameOn}
                    verification={verification}
                    selectedAnswers={selectedAnswers}
                />
                <hr />
            </section>
        )    
    })
    
    return (
        <section>
            {display}
            <div className="check-answers-container">
                {!gameOn && <p className="score-count">You scored {answersNumber} out of 5 correct answers</p>}
                <button 
                    className="check-answers-btn"
                    onClick={checkAnswers}
                >{gameOn ? 'Check Answers' : 'Play Again'}</button>
            </div>
        </section>
    )
}