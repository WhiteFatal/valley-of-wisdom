import React from 'react'
import StartingScreen from './StartingScreen.js'
import QuizzScreen from './QuizzScreen.js'
//import logo from './background/1.jpg'

export default function App() {
    const [gameStart, setGameStart] = React.useState(false)
    const [data, setData] = React.useState([])
    const [background, setBackground] = React.useState(randomBackground)

    
    function startGame () {
        setGameStart (true);
    }
    
    React.useEffect(() => {
        fetch(`https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple`)
            .then(res => res.json())
            .then(data => setData(data.results))
    }, [])
    
    function randomBackground () {
      let randomNum = Math.ceil(Math.random() * 16);
      return { backgroundImage: `url(${require(`./background/${randomNum}.jpg`)})` }
    }


    return (
        <div 
          className="start-screen-container"  
          style={background}
        >
          {
            (data.length > 0 && gameStart) ? 
            <QuizzScreen quizzData={data} /> :
            <StartingScreen start={() => startGame} />
          }  
        </div>
    )
}
