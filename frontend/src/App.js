import React from 'react'
import {
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/molecules/Navbar';
import CreateProfilePage from './components/pages/CreateProfilePage';
import HomePage from './components/pages/HomePage';
import ProfileDetailsPage from './components/pages/ProfileDetailsPage';
import ProfilesPage from './components/pages/ProfilesPage';

const App = () => {
  return (
    <main>

      <Navbar></Navbar>
      <Routes>
           <Route path="/" element={<HomePage />} />
           <Route path="/profiles" element={<ProfilesPage />} />
           <Route path="/create-new-profile" element={<CreateProfilePage />} />
           <Route path="/profile-details/:id" element={<ProfileDetailsPage />} />
        </Routes>

    </main>
  )
}

export default App
