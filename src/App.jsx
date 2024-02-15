import { useEffect, useState } from 'react'
import Button from './components/Button'

function App() {
  const [score, setScore] = useState(0)
  const [message, setMessage] = useState("Let's go!")

  const updateScore = (point) => {
    if (score + point <= 999 && score + point >= 0) {
      setScore(score + point)
    }
  }

  useEffect(() => {
    if (score >= 25) {
      setMessage('Unstoppable 🏀')
    } else if (score >= 20) {
      setMessage('Amazing 🥳')
    } else if (score >= 15) {
      setMessage('Fantastic 🎉')
    } else if (score >= 10) {
      setMessage('Bravo 👌')
    } else if (score >= 5) {
      setMessage('Good job 👍')
    } else {
      setMessage("Let's go")
    }
  }, [score])

  return (
    <div className="h-screen w-screen flex justify-center items-center font-lato">
      <div className="bg-orange-900 p-5 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl rounded-md flex flex-col items-center">
        <p className="bg-orange-500 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-white font-bold py-2 px-6 border-b-4 border-orange-700 rounded-md">
          {score}
        </p>
        <div className="flex items-center justify-center h-20">
          <p className="text-white text-lg sm:text-xl lg:text-2xl text-center">
            {message}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button text={'+1'} onClick={() => updateScore(1)} />
          <Button text={'+2'} onClick={() => updateScore(2)} />
          <Button text={'+3'} onClick={() => updateScore(3)} />
          <Button text={'-1'} onClick={() => updateScore(-1)} />
        </div>
      </div>
    </div>
  )
}

export default App
