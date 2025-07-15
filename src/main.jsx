import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Game from './pages/game';
// import Jukebox from './pages/jukebox';
// import Cyworld from './pages/index.jsx'
import { BrowserRouter } from 'react-router-dom';
import App from './App'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    {/* <Routes>
      <Route path="/" element={<Cyworld />} />
      <Route path="/game" element={<Game />} />
      <Route path="/jukebox" element={<Jukebox />} />
    </Routes> */}
  </BrowserRouter>,
)

//main에서 해도 실행 되는데 왜 라우팅은 App.js에서 하는 거지? 
// App.js를 따로 만들어야 하지? main이 제일 먼저 실행되는 거 아닌가?