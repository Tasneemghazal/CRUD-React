import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Index from './components/users/Index.jsx'
import Create from './components/users/Create.jsx'
import Details from './components/users/Details.jsx'
export default function App() {
  return (
    <Routes>
      <Route path='/'/>
      <Route path='*' element={<h2>PAGE NOT FOUND</h2>}/>
      <Route path='/users/index'  element={<Index/>}/>
      <Route path='/users/create' element={<Create/>}/>
      <Route path='/users/:id' element={<Details/>}/>
    </Routes>
  )
}

