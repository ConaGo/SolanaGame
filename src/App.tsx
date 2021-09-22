import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Engine } from './game/Pong'

function App() {
  const myWasm = '/Pong'
  const myPck = '../public/Pong'
  const GODOT_CONFIG = {
    args: [],
    canvasResizePolicy: 2,
    executable: 'Pong',
    experimentalVK: false,
    fileSizes: { 'Pong.pck': 16352, 'Pong.wasm': 18140456 },
    gdnativeLibs: [],
  }
  var engine = new Engine(GODOT_CONFIG) as any
  const f = async () => {
    try {
      await engine.preloadFile(myPck)
    } catch (err) {
      console.log('ErRRRROR')
      console.error(err)
    }
    await engine.init(myWasm)
    // Load and init the engine

    // And the pck concurrently

    console.log('st')
    // Now start the engine.
    try {
      await engine.start({})
    } catch (err) {
      console.log('eroooooooooor')
      console.log(err)
    }

    console.log('Engine has started!')
  }
  console.log(process.env.PUBLIC_URL)
  const height = document.body.clientHeight
  return (
    <div style={{ height: height, width: '100%' }} className="App">
      <iframe
        //frameborder="0"
        style={{ overflow: 'hidden', height: '100%', width: '100%' }}
        height="100%"
        width="100%"
        src="./Pong.html"
      />
      {/* <canvas
        style={{ display: 'block', width: 400, height: 500 }}
        id="canvas"
      ></canvas> */}
    </div>
  )
}

export default App
