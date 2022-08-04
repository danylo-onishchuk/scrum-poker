import { Routes, Route } from 'react-router-dom';
import { GameScreen } from './components/MainGameComponents/GameScreen';
import { Main } from './components/Main/Main';
import { Register } from './components/Register/Register';
import './App.css';
import { Connect } from './components/Connect/Connect';

export const App: React.FC = () => (
  <Routes>
    <Route path="/"  element={<Main />} />
    <Route path="/register"  element={<Register />} />
    <Route 
      path="/game"  
      element={
        <Connect loginClick={() => window.close()} />
      }
    />
    <Route path="/game/:boardId" element={<GameScreen />} />
    <Route path="*" element={<Main />} />
  </Routes>
);
