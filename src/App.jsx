import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import DefaultLayout from '../components/DefaultLayout'
import Homepage from '../components/Homepage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" >
              <Route index element={<Homepage />} />
              <Route path=":title" />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
