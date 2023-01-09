import React from 'react'
import nextId from 'react-id-generator'

export default function QuizzAnswers (props) {
    
    const [answerLock, setAnswerLock] = React.useState(true)
    const [answerButtonArray, setAnswerButtonArray] = React.useState(answerButtonsRender)
    function answerButtonsRender() { 
        return props.questionInstance.answers.map((answer, index) => {
            let answerId = `${props.qId}G${index}`;                       
            return (
                <button 
                    id={answerId}
                    className="answer-btn" 
                    key={nextId()}
                    onClick={() => selectAnswer(answerId)}                            
                >{answer
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
                    .replace(/&ouml;/g, "\ö")
                }</button>    
            )
        })       
    }
    
    if (props.gameOn === false && answerLock) {
        setAnswerLock(false)
        setAnswerButtonArray(prevVal => {
            return  props.questionInstance.answers.map((answer, index) => {
                let answerId = `${props.qId}G${index}`               
                let backColor = {opacity: '0.6'}      
                if (props.selectedAnswers[`Q${props.qId}`] === answer && answer === props.questionInstance.correct_answer) {
                    backColor = {backgroundColor:'#94D7A2', border: 'none'}
                }
                if (props.selectedAnswers[`Q${props.qId}`] === answer && answer !== props.questionInstance.correct_answer) {
                    backColor = {backgroundColor:'#F8BCBC', opacity: '0.5'}
                }       
                return (
                    <button 
                        id={answerId}
                        className="answer-btn" 
                        key={nextId()}
                        
                        style={backColor}
                    >{answer
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
                        .replace(/&ouml;/g, "\ö")
                    }</button>    
                )
            })
        })
    }
    
    function selectAnswer(id) {           
        props.questionInstance.answers.map((answer, index) => {
            let answerId = `${props.qId}G${index}`; 
            id === answerId && props.arrayFunction(answer, props.qId)
            updateButtonsState (id)
            return answer;
        })
    }    
        
    function updateButtonsState (id) {
        
        answerLock && setAnswerButtonArray(prevVal => {
            return  props.questionInstance.answers.map((answer, index) => {
                let answerId = `${props.qId}G${index}`               
                let backColor ={}
                                                
                if (props.gameOn && answerId === id) {
                    backColor = {backgroundColor:'#8F92A6'}
                }
                if (props.gameOn && answerId !== id){
                    backColor = {backgroundColor:'#F5F7FB'}  
                } 
                
                return (
                    <button 
                        id={answerId}
                        className="answer-btn" 
                        key={nextId()}
                        onClick={() => selectAnswer(answerId)} 
                        style={backColor}
                    >{answer
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
                        .replace(/&ouml;/g, "\ö")
                    }</button>    
                )
            })
        })
    }  

    return (
        <div>
            {answerButtonArray}
        </div>
    )
}