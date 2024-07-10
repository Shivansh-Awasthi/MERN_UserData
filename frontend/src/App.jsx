import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './components/Register'
import Show from './components/Show'
import Add from './components/Add'
import Edit from './components/Edit'

function App() {


  return (

    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Register />} />
          <Route path='/add' element={<Add />} />
          <Route path='/all' element={<Show />} />
          <Route path='/:id' element={<Edit />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
