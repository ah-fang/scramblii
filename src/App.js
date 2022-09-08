import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Games from './routes/games';
import Explore from './routes/explore';
import Header from './components/Header'

function App() {
  return (
    // <Header />
    <BrowserRouter>  
    <Routes>

      <Route path='/' element={<Header />}>
        <Route path='games'element={<Games />}>
          {/* create conditional route to whatever game is selected */}
          {/* <Route path=':gameId' element={<Game/>} /> */}
        </Route>
        <Route path='explore'element={<Explore />}>
          {/* create routes to other areas in the world here */}          
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>

  );
}
export default App;
