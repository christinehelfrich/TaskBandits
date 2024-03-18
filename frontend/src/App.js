import React from 'react'
import {
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/molecules/Navbar';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import ProfileDetailsPage from './components/pages/ProfileDetailsPage';
import ProfilePage from './components/pages/ProfilePage';
import ProfilesPage from './components/pages/ProfilesPage';
import SignUpPage from './components/pages/SignUpPage';
import AuthGuardedRoute from './components/auth/AuthGuardedRoute';
import SuperUserGuardedRoute from './components/auth/SuperUserGuardedRoute';
import ViewWorkersPage from './components/pages/ViewWorkersPage';
import CreateTaskPage from './components/pages/CreateTaskPage';
import ViewTasksPage from './components/pages/ViewTasksPage';
import TaskDetailsPage from './components/pages/TaskDetailsPage';
import IsEmployerGuardedRoute from './components/auth/IsEmployerGuardedRoute';

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

            <Route path="/all-workers" element={
            <AuthGuardedRoute>          
              <ViewWorkersPage />
            </AuthGuardedRoute>
           } />

            <Route path="/all-tasks" element={
            <AuthGuardedRoute>          
              <ViewTasksPage />
            </AuthGuardedRoute>
           } />

           <Route path="/create-new-task" element={
            <AuthGuardedRoute> 
              <IsEmployerGuardedRoute>      
              <CreateTaskPage />
              </IsEmployerGuardedRoute>
            </AuthGuardedRoute>
           } />

           <Route path="/profile-details/:id" element={
            <AuthGuardedRoute>   
             <ProfileDetailsPage />
             </AuthGuardedRoute>} />

             <Route path="/task-details/:id" element={
            <AuthGuardedRoute>   
             <TaskDetailsPage />
             </AuthGuardedRoute>} />

        </Routes>

    </main>
    </>
  )
}

export default App
