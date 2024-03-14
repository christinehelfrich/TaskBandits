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
import ProfilePage from './components/pages/ProfilePage';
import ProfilesPage from './components/pages/ProfilesPage';
import SignUpPage from './components/pages/SignUpPage';
import AuthGuardedRoute from './components/auth/AuthGuardedRoute';
import SuperUserGuardedRoute from './components/auth/SuperUserGuardedRoute';

const App = () => {
  return (

<>
      <Navbar></Navbar>
      <main>
      <Routes>
           <Route path="/" element={<HomePage />} />
           <Route path="/login" element={<LoginPage />} />
           <Route path="/signup" element={<SignUpPage />} />
           <Route path="/profile" element={
            <AuthGuardedRoute>          
              <ProfilePage />
            </AuthGuardedRoute>
           } />
           <Route path="/profiles" element={
            <AuthGuardedRoute> 
              <SuperUserGuardedRoute>
                <ProfilesPage />
              </SuperUserGuardedRoute>         
            </AuthGuardedRoute>
           } />
           <Route path="/create-new-profile" element={
             <AuthGuardedRoute>          
              <CreateProfilePage />
              </AuthGuardedRoute>
            } />
           <Route path="/profile-details/:id" element={
            <AuthGuardedRoute>   
             <ProfileDetailsPage />
             </AuthGuardedRoute>} />
        </Routes>

    </main>
    </>
  )
}

export default App
