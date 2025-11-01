import { ErrorBoundary } from "react-error-boundary"
import CommonRoute from "./components/CommonRoute"
import { HelmetProvider } from "react-helmet-async"
import { BrowserRouter } from "react-router-dom"
import ErrorFallback from "./components/ErrorFallback"

function App() {

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <CommonRoute />
        </ErrorBoundary>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
