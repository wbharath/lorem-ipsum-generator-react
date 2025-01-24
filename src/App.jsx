import { useState } from 'react'
import './App.css'
import {nanoid} from 'nanoid'
import data from './data.js'

function App() {
  const [count, setCount] = useState(1)
  const [text, setText] = useState([])
  const handleSubmit = (e)=>{
    e.preventDefault()
    let amount = parseInt(count)
    setText(data.slice(0, amount))
  }
  return (
    <section className='section-center'>
      <h4>Tired of lorem-ipsum??</h4>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>Paragraphs:</label>
        <input 
        type='number' 
        id='amount' 
        name='amount'
        min='1'
        max='8'
        value={count}
        onChange={(e)=>setCount(e.target.value)}
        />
        <button type='submit' className='btn'>Generate</button>
      </form>
      <article className='lorem-text'>
        {text.map((item)=>{
          return <p key={nanoid}>{item}</p>
        })}
      </article>
    </section>
  )
}

export default App
