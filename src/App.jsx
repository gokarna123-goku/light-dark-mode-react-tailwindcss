import { BrowserRouter as Router } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import About from "./pages/about/About"

function App() {

  return (
    <>
      <Router>
        <div className="w-full min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 flex flex-col">
          <Navbar />
          <Home />
          <About />
        </div>
      </Router>
    </>
  )
}

export default App
