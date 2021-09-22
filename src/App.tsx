import React from 'react'
import './App.css'

function App() {
  const height = document.body.clientHeight
  return (
    <div style={{ height: height, width: '100%' }} className="App">
      <iframe
        title="game"
        style={{ overflow: 'hidden', height: '100%', width: '100%' }}
        src="./game.html"
      />
    </div>
  )
}

export default App
