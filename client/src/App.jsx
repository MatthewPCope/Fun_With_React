import React from 'react'
import './App.css'
import Counter from './components/Counter.jsx'
import Fun from './components/Fun.jsx'
import TodoList from './components/TodoList.jsx'

function App() {
  
  return (
    <>
      <div id='container'>
          <div>
          < TodoList />
          </div>
          <div>
          < Fun />
          </div>
          <div>
          < Counter />
          </div>
      </div>

    </>
  )
}

export default App

