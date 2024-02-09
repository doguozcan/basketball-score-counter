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
    }
  }, [score])

  return (
    <div className="h-screen w-screen bg-orange-700 flex justify-center items-center font-lato">
      <div className="bg-orange-900 p-5 h-96 w-96 rounded-sm flex flex-col justify-between items-center">
        <p className="bg-orange-500 text-6xl flex items-center justify-center text-white font-bold w-36 h-36 border-b-4 border-orange-700 rounded">
          {score}
        </p>
        <p className="text-white text-2xl">{message}</p>
        <div className="flex gap-5 mb-5">
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
