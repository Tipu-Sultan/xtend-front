import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import AddFile from './components/AddFile'
import Question from './components/Question'
import Header from './components/Header'

const App = () => {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<AddFile/>}  />
          <Route path='/questions' element={<Question/>}  />
        </Routes>
      </Router>
    </div>
  )
}

export default App