import RouterConfig from './configs/react-router-dom'
import { QueryClientProvider, queryClient } from './configs/react-query'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterConfig />
    </QueryClientProvider>
  )
}

export default App
