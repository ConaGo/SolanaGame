//import React from 'react'

function Game() {
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

export { Game }
