import React, {useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './MainPage'
import Nav from './Nav'
import HatsList from './HatsList'
import HatForm from './CreateHat'

function App(props) {

  const [hats, setHats] = useState(props.hats)

  async function deleteHat(hat) {
    const deleteUrl = `http://localhost:8090/api/hats/${hat.id}`
    const fetchConfig = {
      method: 'DELETE',
  }
  await fetch (deleteUrl, fetchConfig)
  window.location.reload(false)
  

  // const idx = hats.indexOf(hat)
  // const updated_hats = [...hats]
  // updated_hats.splice(idx, 1)
  // setHats(updated_hats)
  }

  if (props.hats === undefined) {
    return null;

}
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="hats" element={<HatsList hats={props.hats} deleteHat={deleteHat} />} />
          <Route path="hats/new" element={<HatForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
