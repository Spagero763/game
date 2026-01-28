import { useState, useEffect } from 'react';
import { Gamepad } from 'lucide-react';
import './App.css'

function App() {
  const [attempts, setAttempts] = useState(0);
  const [guess, setGuess] = useState('');
  const maxAttempts = 3;
  const [target, setTarget] = useState(null);

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    setTarget(randomNumber);
  }, []);

  const handleCheckGuess = () => {
    if(guess === '') {
      return alert('Input box cant be empty');
    }
    if(attempts == 2 && guess != target){  
      alert(`Game Over! The correct number was ${target}.`);
      resetGame();
      return;  
    }
    if(guess == target){
      alert(`Congratulations! You've guessed the number ${target} correctly!`);
      resetGame();
    } else if (guess < target) {
      alert('Go higher! Try again.');
      setAttempts(attempts + 1);
    } else if (guess > target) {
      alert('Go lower! Try again.');
      setAttempts(attempts + 1);
    }
    setGuess('');
  }

  const resetGame = () => {
    setAttempts(0);
    setGuess('');
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    setTarget(randomNumber);
  } 

  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='flex flex-col gap-2 justify-center items-center border-2 border-blue-500 p-6 rounded-lg shadow-lg'>
        <h2 className='font-bold text-3xl text-blue-500 flex items-center gap-2'>
          <Gamepad size={40} /> Guessing Game <Gamepad size={40} />
        </h2>
        <p className='text-4xl'>{attempts} / {maxAttempts}</p>
        <label htmlFor="guess">
          <p>Enter your Guess </p>
        </label>
        <input 
          className='border-2 border-black px-5 py-2 rounded-lg'
          type="text" 
          value={guess} 
          onChange={(e) => setGuess(e.target.value)} 
          placeholder='Enter you guess' 
          max={100} 
          min={1}
          disabled={attempts === 3}
          required/>
        <p className='text-xs'></p>
        <button 
          onClick={handleCheckGuess}
          className='mx-auto px-6 py-2 font-bold rounded-2xl bg-blue-500'>Submit</button>
      </div>
    </div>
  )
}

export default App
