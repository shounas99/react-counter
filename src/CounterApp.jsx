import { useState } from 'react'
import PropTypes from "prop-types"
// import confetti from 'https://cdn.skypack.dev/canvas-confetti';

export const CounterApp = ({ value }) => {
  const [ counter , setCounter ] = useState( value );
  const handleAdd = () => { 
    setCounter( counter + 1 )
    if ((counter + 1)% 10 === 0) {
      // confetti();
    }
  }
  const handleSubtract = () => {
    setCounter( counter - 1)
    if ((counter - 1) % 10 === 0) {
      // confetti();
    }
    if(counter - 1 === 0){
      handleReset()
    }
  }
  const handleReset = () => setCounter(value)

  return (
    <>
      <h1>Counter App</h1>
      <h2>{ counter }</h2>

      <button onClick={ handleAdd }> +1 </button>
      <button onClick={ handleSubtract }> -1 </button>
      <button aria-label="btn-reset" onClick={ handleReset }> Reset </button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}