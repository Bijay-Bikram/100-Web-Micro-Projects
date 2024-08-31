// import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contact from './components/Contact'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Service from './components/Service'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <><Navbar />< Home /></>
    },
    {
      path: '/service',
      element: <><Navbar /><Service /></>
    },
    {
      path: '/contact',
      element: <> <Navbar /> < Contact /></>
    },

  ])

  return (
    <>

      <RouterProvider router={router} />

    </>
  )
}

export default App
