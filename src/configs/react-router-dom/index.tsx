import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from '../../components/pages/error-page'
import HomePage from '../../pages/home'
import HeroPage from '../../pages/hero'

const RouterConfig: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
      errorElement: <ErrorPage />,
    },
    {
      path: 'hero/:heroId',
      element: <HeroPage />,
      errorElement: <ErrorPage />,
    },
  ])

  return <RouterProvider router={router} />
}

export default RouterConfig
