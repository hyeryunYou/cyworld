import { Routes, Route } from 'react-router-dom';
import Cyworld from './pages';
import Home from './pages/home';
import Game from './pages/game';
import Jukebox from './pages/jukebox';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Cyworld />}>
          {/* 중첩 라우트들 
          -> 부모 컴포넌트 안에 자식 컴포넌트가 렌더링
          이때 자식이 들어갈 위치를 지정해주는 게 Outlet*/}
          <Route index element={<Home />} />
          <Route path="game" element={<Game />} />
          <Route path="jukebox" element={<Jukebox />} />
        </Route>
    </Routes>
  );
}

export default App;