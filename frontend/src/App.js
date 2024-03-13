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
import GuardedRoute from './components/util/GuardedRoute';

const App = () => {
  return (

<>
      <Navbar></Navbar>
      <main>
      <Routes>
           <Route path="/" element={<HomePage />} />
           <Route path="/login" element={<LoginPage />} />
           <Route path="/signup" element={<SignUpPage />} />
           <Route path="/profiles" element={
            <GuardedRoute>          
              <ProfilesPage />
            </GuardedRoute>
           } />
           <Route path="/create-new-profile" element={
             <GuardedRoute>          
              <CreateProfilePage />
              </GuardedRoute>
            } />
           <Route path="/profile-details/:id" element={
            <GuardedRoute>   
             <ProfileDetailsPage />
             </GuardedRoute>} />
        </Routes>

    </main>
    </>
  )
}

export default App
