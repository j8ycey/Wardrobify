import React, {useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './MainPage'
import Nav from './Nav'
import HatsList from './HatsList'
import HatForm from './HatForm'
import ShoesList from './ShoesList';
import ShoeForm from './ShoeForm';

function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="hats" element={<HatsList />} />
          <Route path="hats/new" element={<HatForm />} />
          <Route path="/shoes" element={<ShoesList />} />
          <Route path="/shoes/new" element={<ShoeForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
