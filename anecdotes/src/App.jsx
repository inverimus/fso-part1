import { useState } from 'react'

const Header = (props) => {
  return (
    <h1>{props.text}</h1>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.click}>{props.text}</button>
  )
}

const Anecdote = (props) => {
  return (
    <div>
      {props.anecdote}<br/>
      has {props.votes} votes
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const length = anecdotes.length

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(length).fill(0))

  const maxVote = Math.max(...votes)

  const nextAnecdote = () => {
    var next = selected
    while (next == selected) {
      next = Math.floor(Math.random() * anecdotes.length)
    }
    setSelected(next)
  }

  const vote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  return (
    <div>
      <Header text="Anecdote of the day" />
      <Anecdote anecdote={anecdotes[selected]} votes={votes[selected]} />
      <Button click={vote} text="vote"/>
      <Button click={nextAnecdote} text="next anecdote"/>
      <Header text="Anecdote with most votes" />
      <Anecdote 
        anecdote={anecdotes[votes.findIndex(elem => elem == maxVote)]}
        votes={maxVote}
      />
    </div>
  )
}

export default App