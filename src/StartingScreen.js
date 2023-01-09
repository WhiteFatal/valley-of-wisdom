import React from 'react'

export default function StartingScreen (props) {
    
    return(
        <main className="start-screen-main">
            <h1>Quizzical</h1>
            <h2>(Easy Five Question Quiz)</h2>
            <button className="start-btn" onClick={props.start()} >Start Quiz</button>
        </main>
    )
}