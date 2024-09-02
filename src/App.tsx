import RouterConfig from './configs/react-router-dom'
import { QueryClientProvider, queryClient } from './configs/react-query'
import { FavoritesProvider } from './contexts/favorites-context/favorites-context.provider'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <FavoritesProvider>
        <RouterConfig />
      </FavoritesProvider>
    </QueryClientProvider>
  )
}

export default App
