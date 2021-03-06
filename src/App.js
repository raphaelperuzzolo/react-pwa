import React, { lazy, Suspense } from "react"
import { useAddToHomescreenPrompt } from "./useAddToHomescreenPrompt"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
const About = lazy(() => import("./About"))
const Home = lazy(() => import("./Home"))

const App = () => {
  const [prompt, promptToInstall] = useAddToHomescreenPrompt()

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        {/* {prompt && <button onClick={promptToInstall}>Add to homescreen</button>} */}
        {console.log(prompt)}
        <button onClick={promptToInstall}>Add to homescreen</button>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  )
}

export default App
