import {useState} from "react"
import clsx from "clsx"
import {getRandomWord,getFarewellMessage} from "./utils.js";
import {languages} from "./languages"
import Confetti from"react-confetti"

export default function AssemblyEndGame() {

  //state values
  const[currentWord,setCurrentWord]=useState(()=>getRandomWord())
  const[guessedLetters,setGuessedLetters]=useState([])
  // console.log(guessedLetters)

  //derived values
  const numGuessesLeft=languages.length-1
  const wrongGuessesCount=guessedLetters.filter(
    letter=>!currentWord.includes(letter)
  )
  const isGameWon=currentWord.split("").every(letter=>
    guessedLetters.includes(letter)
  )
  const isGameLost=wrongGuessesCount.length>=numGuessesLeft
  const isGameOver=isGameWon||isGameLost
  const lastGuessedLetter=guessedLetters[guessedLetters.length-1]
  const isLastGuessIncorrect=lastGuessedLetter&&!currentWord.includes(lastGuessedLetter)
  console.log(isLastGuessIncorrect)

  // console.log(wrongGuessesCount.length)

  //static values
  const alphabet="abcdefghijklmnopqrstuvwxyz"

  function addGuessedLetter(letter){
    setGuessedLetters(prevLetters=>
      prevLetters.includes(letter) ? 
      prevLetters :
       [...prevLetters,letter])
  }

  function startNewGame(){
    setCurrentWord(getRandomWord())
    setGuessedLetters([])
  }
  const languageElements=languages.map((lang,index)=>{
    const isLanguageLost=index<wrongGuessesCount.length
    const styles={
      backgroundColor: lang.backgroundColor,
      color: lang.color
    }

    const className=clsx("chip",isLanguageLost&&"lost")
    return(
      <span 
      className={className}
      style={styles}
      key={lang.name}
      > 
        {lang.name}
      </span>
    )
  })

  const letterElements=currentWord.split("").map((letter,index)=>{
    const shouldRevealLetter=isGameLost||guessedLetters.includes(letter)
    const letterClassName=clsx(
      isGameLost&&!guessedLetters.includes(letter)&&"missed-letter"
    )
    return(
    <span key ={index} className={letterClassName}>{shouldRevealLetter ? letter.toUpperCase() : ""}</span>
    )

})


  const keyboardElements=alphabet.split("").map(letter=>{
    const isGuessed=guessedLetters.includes(letter)
    const isCorrect=isGuessed&&currentWord.includes(letter)
    const isWrong=isGuessed&&!currentWord.includes(letter)
    const className=clsx(
      {
        correct:isCorrect,
        wrong:isWrong
      }
    )

    // console.log(className)

    return (
    <button 
      className={className}
      key={letter} 
      disabled={isGameOver}
      aria-disabled={guessedLetters.includes(letter)}
      aria-label={`Letter ${letter}`}
      onClick={() => addGuessedLetter(letter)}
      >
      {letter.toUpperCase()}
      </button>
    )
})

const gameStatusClass=clsx("game-status",{
  won:isGameWon,
  lost:isGameLost,
  farewell:!isGameOver&&isLastGuessIncorrect
})

function renderGameStatus(){
  if(!isGameOver && isLastGuessIncorrect){
    return<p className="farewell-message">
      {getFarewellMessage(languages[wrongGuessesCount.length-1].name)}
    </p>
  }
  if(isGameWon){
    return(
      <>
      <h2>You Win! 🎉</h2>
      <p>Well Done</p>
      </>
    )
  }
  if(isGameLost){
    return(
      <>
      <h2>You Lost! 😢</h2>
      <p>Better start learning Assembly language</p>
      </>
    )
  }
}

  return (
    <main>
      {
        isGameWon&&
        <Confetti
          recycle={false}
          numberOfPieces={1000}
          />
      }
      <header>
        <h1>Assembly End Game </h1>
        <p>Guess the word within 8 attempts to keep the programming 
          world safe from Assembly!
        </p>
      </header>
      <section aria-live="polite" role="status" className={gameStatusClass}>
        {renderGameStatus()}
      </section>
      <section className="language-chips">
        {languageElements}
      </section>
      <section className="word">
        {letterElements}
      </section>
      {/*combined visually -hidden aria-live region for status updates*/}
      <section className="sr-only" aria-live="polite" role="status">
        <p>
          {currentWord.includes(lastGuessedLetter) ?
            `Correct! the letter ${lastGuessedLetter}is in the word`:
            'Sorry the letter ${lastGuessedLetter} is not in the word'
          }
          You have {numGuessesLeft} attempts left.
        </p>
        <p>Current word:{currentWord.split("").map(letter=>
          guessedLetters.includes(letter) ? letter+"." : "blank"
        ).join(" ")}</p>
      </section>
      <section className="keyboard">
    {keyboardElements}
      </section>
      <section className="new-game">
    {isGameOver && <button className="new-game" onClick={startNewGame}>New Game</button>}
      </section>
    </main>
  )
}