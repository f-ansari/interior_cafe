import './style/App.css'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Feed from './pages/Feed'
import Nav from './components/Nav'
import UserDash from './pages/UserDash'
import PostDetail from './components/user_dash/UserPostDetail'
import FeedPostDetail from './components/posts/FeedPostDetail'

function App() {
  return (
    <div>
      <Nav />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/feed" component={Feed} />
          <Route path="/userdash" component={UserDash} />
          <Route path="/post/detail/:post_id" component={PostDetail} />
          <Route
            path="/from/feed/post/detail/:post_id"
            component={FeedPostDetail}
          />
        </Switch>
      </main>
    </div>
  )
}

export default App
