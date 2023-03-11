import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TournamentPage from './components/tournamentPage/TournamentPage';
import { GlobalStorage } from './GlobalStorage.js';

function App() {

  return (
      <BrowserRouter>
        <GlobalStorage>

          <div className="App">

          </div>

          <Routes>
            <Route path='/' element={<TournamentPage />}/>
          </Routes>
        </GlobalStorage>
      </BrowserRouter>
  );
}

export default App;
