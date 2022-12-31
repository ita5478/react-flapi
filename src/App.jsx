import './App.css'
import { GameConfig } from './models/GameConfig'

const GAME_CONFIG = new GameConfig({
  jumpSpeed: 10,
  gravity: 10,
  basePosition: {
    x: 40,
    y: 100
  },
  horizontalSpeed: 10,
  updateMs: 100
});

function App() {

  return (
    <div className="App">
      
    </div>
  )
}

export default App
