import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.tsx'
import LoginPage from './Components/LoginPage.tsx'
import CalendarPage from './Components/CalendarPage.tsx'
import StartPage from './Components/StartPage.tsx'


import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './MainLayout.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {path: "login", element: <LoginPage/>},
      {path: "", element: <StartPage/>},


      {
        element: <MainLayout />,
        children: [
          {path: "calendar", element: <CalendarPage/>}
          // {path: "profile", element: <CalendarPage/>}
        ]
      }
    ]
  }
])


createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
