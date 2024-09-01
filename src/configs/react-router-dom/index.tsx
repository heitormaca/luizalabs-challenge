import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import ErrorPage from '../../components/pages/error-page'
import HomePage from '../../pages/home'
import HeroPage from '../../pages/hero'

const RouterConfig: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navigate to={'/heros'} replace />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/heros',
      element: <HomePage />,
      errorElement: <ErrorPage />,
    },
    {
      path: 'heros/:heroId',
      element: <HeroPage />,
      errorElement: <ErrorPage />,
    },
  ])

  return <RouterProvider router={router} />
}

export default RouterConfig
