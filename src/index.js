import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Games from './routes/games';
import Explore from './routes/explore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>  
    <Routes>
      <Route path='/'element={<App />}>
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

reportWebVitals();