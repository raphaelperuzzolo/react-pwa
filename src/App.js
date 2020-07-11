import React, { lazy, Suspense } from "react"
import { addToHomeScreen } from './functions'
import AddToHomescreen from 'react-add-to-homescreen';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

const About = lazy(() => import("./About"))
const Home = lazy(() => import("./Home"))

const handleAddToHomescreenClick = () => {
  console.log(`
    1. Open Share menu
    2. Tap on "Add to Home Screen" button`);
};


const App = () => (
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
      <AddToHomescreen onAddToHomescreenClick={() => handleAddToHomescreenClick} />
      <button className="add-button">Add to home screen</button>

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

export default App
