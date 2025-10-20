import { useState } from 'react'

const Button = (props) => {
    const { onClick, text } = props
    return (
      <button onClick={onClick}>{text}</button>
    )
}

const StatisticLine = (props) => {
    const { text, value } = props
    return (
      <div>{text} {value}</div>
    )
}

const Statistics = (props) => {
   const { good, neutral, bad } = props
   const total = good + neutral + bad
   const average = total === 0 ? 0 : (good - bad) / total
   const positive = total === 0 ? 0 : (good / total) * 100
  
   if (total === 0) {
      return (<div><h1>Statistics</h1><div>No feedback given</div></div>)
   }

   return (
     <div>
       <h1>Statistics</h1>
       <StatisticLine text="good" value={good} />
       <StatisticLine text="neutral" value={neutral} />
       <StatisticLine text="bad" value={bad} />
       <StatisticLine text="all" value={total} />
       <StatisticLine text="average" value={average} />
       <StatisticLine text="positive" value={`${positive} %`} />
     </div>
   )
}

const App = () => {
  // salve os cliques de cada botão em seu próprio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
