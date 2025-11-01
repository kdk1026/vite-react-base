import { ErrorBoundary } from "react-error-boundary"
import CommonRoute from "./components/CommonRoute"
import { BrowserRouter } from "react-router-dom"
import ErrorFallback from "./components/ErrorFallback"

function App() {

  return (
    <BrowserRouter>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <CommonRoute />
      </ErrorBoundary>
    </BrowserRouter>
  )
}

export default App
