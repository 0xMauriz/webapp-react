import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import './styles/Personal-Bootstrap.css'
import './App.css'
import DefaultLayout from '../components/DefaultLayout'
import Homepage from '../components/Homepage'
import MovieDetailsPage from '../components/MovieDetailsPage.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" >
              <Route index element={<Homepage />} />
              <Route path=":title" element={<MovieDetailsPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
