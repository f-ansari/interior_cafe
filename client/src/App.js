import './style/App.css'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Feed from './pages/Feed'
import Nav from './components/Nav'

function App() {
  return (
    <div>
      <Nav />
      <header>Testing</header>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/feed" component={Feed} />
        </Switch>
      </main>
    </div>
  )
}

export default App
