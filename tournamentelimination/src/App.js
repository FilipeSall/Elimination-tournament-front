import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TournamentPage from './components/tournamentPage/TournamentPage';

function App() {

  return (
      <BrowserRouter>
        <div className="App">
          <TournamentPage />
        </div>
        <Routes>

        </Routes>
      </BrowserRouter>
  );
}

export default App;
