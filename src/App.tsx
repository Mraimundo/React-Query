import { ChakraProvider } from "@chakra-ui/react"
import { QueryClientProvider, QueryClient } from 'react-query';
// import { User } from "./components/Users"
import { UsersWithReactQuery } from "./components/UsersWithReactQuery";

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <UsersWithReactQuery />
        {/* <User /> */}
      </ChakraProvider>
    </QueryClientProvider>
  )
}

export default App
