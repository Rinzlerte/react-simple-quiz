import React from 'react'

const Res = ({correct, all, restart}) => {
  return (
    <div className="result">
        <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt=""/>
        <h2>You guessed right {correct} from {all}</h2>
        <button type='button' onClick={()=>restart()}>Try again</button>
    </div>
  )
}

export default Res
