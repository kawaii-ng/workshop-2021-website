import React from 'react'
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import './App.css';
import logo from './logo.svg'

import HomePage from './pages/HomePage/HomePage'
import WorkshopPage from './pages/WorkshopPage/WorkshopPage'
import SoftwarePage from './pages/SoftwarePage/SoftwarePage';

import DropZone from './components/DropZone/DropZone';
import MainNav from './components/MainNav/MainNav';

function App() {

  return (
    <div>

      <Router>

        <div className="page-layout">

          <Routes>
            <Route path="/:page" element={<MainNav />}>
              <Route path=":dayOf" element={<MainNav />}></Route>
              <Route path=":dayOf/:topicN" element={<MainNav />}></Route>
              <Route path=":dayOf/:topicN/:sectionN" element={<MainNav />}></Route>
            </Route>
          </Routes>

          <div className="page-content">
            <Routes>
              <Route path='/' element={<Navigate to="/home"/>} exact></Route>
              <Route path='/home' element={<HomePage/>} exact></Route>
              <Route path='/material/:day' element={<WorkshopPage/>} exact>
                <Route path=":topic" element={<WorkshopPage />}></Route>
                <Route path=":topic/:section" element={<WorkshopPage />}></Route>
              </Route>
              <Route path='/dl' element={<SoftwarePage/>}></Route>
            </Routes>
          </div>
        </div>

      </Router>


    </div>
  );
}

export default App;
