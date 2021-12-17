import React from 'react'
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import './App.css';
import logo from './logo.svg'

import HomePage from './pages/HomePage/HomePage'
import WorkshopPage from './pages/WorkshopPage/WorkshopPage'

import DropZone from './components/DropZone/DropZone';
import MainNav from './components/MainNav/MainNav';

function App() {

  return (
    <div>

      <Router>

        <div className="page-layout">
          
          <MainNav />

          <div className="page-content">
            <Routes>
              <Route path='/' element={<Navigate to="/home"/>} exact></Route>
              <Route path='/home' element={<HomePage/>} exact></Route>
              <Route path='/material/:day' element={<WorkshopPage/>} exact>
                <Route path=":topic" element={<WorkshopPage />}></Route>
                <Route path=":topic/:section" element={<WorkshopPage />}></Route>
              </Route>
            </Routes>
          {/* <DropZone submitDate="17" title="flappy-bird" /> */}
          </div>
        </div>

      </Router>


    </div>
  );
}

export default App;
