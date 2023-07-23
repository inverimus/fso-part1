import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad

  const Header = (props) => {
    return (
      <h1>{props.text}</h1>
    )
  }

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }

  const Button = (props) => {
    return (
      <button onClick={props.click}>{props.text}</button>
    )
  }

  const StatisticsLine = (props) => {
    return (
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
    )
  }

  const Statistics = () => {
    if (all > 0) {
      return (
        <table>
          <StatisticsLine text="good" value={good} />
          <StatisticsLine text="neutral" value={neutral} />
          <StatisticsLine text="bad" value={bad} />
          <StatisticsLine text="all" value={all} />
          <StatisticsLine text="average" value={(good - bad) / all} />
          <StatisticsLine text="positive" value={(good / all).toString().concat(" %")} />
        </table>
      )
    }
    return <div>No feedback given</div>
  }

  return (
    <div>
      <Header text={"give feedback"} />
      <Button text={"good"} click={handleGood} />
      <Button text={"neutral"} click={handleNeutral} />
      <Button text={"bad"} click={handleBad} />
      <Header text={"statistics"} />
      <Statistics />
    </div>
  )
}

export default App