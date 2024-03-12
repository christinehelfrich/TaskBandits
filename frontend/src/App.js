import React from 'react'
import {
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/molecules/Navbar';
import CreateProfilePage from './components/pages/CreateProfilePage';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import ProfileDetailsPage from './components/pages/ProfileDetailsPage';
import ProfilesPage from './components/pages/ProfilesPage';
import SignUpPage from './components/pages/SignUpPage';

const App = () => {
  return (

<>
      <Navbar></Navbar>
      <main>
      <Routes>
           <Route path="/" element={<HomePage />} />
           <Route path="/login" element={<LoginPage />} />
           <Route path="/signup" element={<SignUpPage />} />
           <Route path="/profiles" element={<ProfilesPage />} />
           <Route path="/create-new-profile" element={<CreateProfilePage />} />
           <Route path="/profile-details/:id" element={<ProfileDetailsPage />} />
        </Routes>

    </main>
    </>
  )
}

export default App
