import { createBrowserRouter } from 'react-router-dom'
import { AppTemplate } from './components/templates/AppTemplate.tsx'
import { About, Contact, Courses, Home } from './components/pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppTemplate />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/courses',
        element: <Courses />
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ]
  }
],
{
  basename: '/chima-webapp/'  // Aquí agregas el basename
})
