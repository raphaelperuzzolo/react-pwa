import React, { lazy, Suspense } from "react"
import { useAddToHomescreenPrompt } from "./useAddToHomescreenPrompt"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

const About = lazy(() => import("./About"))
const Home = lazy(() => import("./Home"))


const App = () => {

  const [prompt, promptToInstall] = useAddToHomescreenPrompt();
  const [isVisible, setVisibleState] = React.useState(false);

  const hide = () => setVisibleState(false);

  React.useEffect(
    () => {
      if (prompt) {
        setVisibleState(true);
      }
    },
    [prompt]
  );

  if (!isVisible) {
    return <div />;
  }


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

        {/* <button onClick={promptToInstall}>Add to homescreen</button> */}

        <div onClick={hide}>
          <button onClick={hide}>Close</button>
            Hello! Wanna add to homescreen?
          <button onClick={promptToInstall}>Add to homescreen</button>
        </div>

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
