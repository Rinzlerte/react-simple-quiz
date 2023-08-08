import React from 'react'

const Game = ({ question, choose, percent}) => {
    return (
    <>
        <div className="progress">
            <div style={{ width: `${percent}%` }} className="progress__inner"></div>
        </div>
        <h1>{question.title}</h1>
        <ul>
            {
                question.variants?.map((item, index)=>{
                    return (
                        <li key={index} onClick={()=>choose(index)}>
                            {item}
                        </li>
                    )
                })
            }
        </ul>
    </>
   
  )
}

export default Game