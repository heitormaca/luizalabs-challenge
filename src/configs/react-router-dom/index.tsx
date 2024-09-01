import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import ErrorPage from '../../components/pages/error-page'
import Hero from '../../pages/hero'
import Heroes from '../../pages/heroes'

const RouterConfig: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navigate to={'/heroes'} replace />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/heroes',
      element: <Heroes />,
      errorElement: <ErrorPage />,
    },
    {
      path: 'heroes/:heroId',
      element: <Hero />,
      errorElement: <ErrorPage />,
    },
  ])

  return <RouterProvider router={router} />
}

export default RouterConfig
