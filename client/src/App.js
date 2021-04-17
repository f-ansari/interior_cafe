import './style/App.css'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import { CheckSession } from './store/actions/AuthAction'
import Home from './pages/Home'
import Feed from './pages/Feed'
import Nav from './components/nav/Nav'
import UserDash from './pages/UserDash'
import CreatePost from './pages/CreatePost'
import Login from './components/login_register/Login'
import Register from './components/login_register/Register'
import AddImages from './components/create_post/AddImages'
import PostDetail from './components/user_dash/UserPostDetail'
import FeedPostDetail from './components/posts/FeedPostDetail'

const state = ({ userState }) => {
  return { userState }
}

const action = (dispatch) => {
  return {
    checkSession: (token) => dispatch(CheckSession(token))
  }
}

function App(props) {
  useEffect(() => {
    const token = localStorage.getItem('token')
    props.checkSession(token)
    // eslint-disable-next-line
  }, [
    props.userState.userId,
    props.userState.firstName,
    props.userState.lastName,
    props.userState.username
  ])

  return (
    <div>
      <Nav />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/feed" component={Feed} />
          <Route path="/userdash" component={UserDash} />
          <Route path="/post/detail/:post_id" component={PostDetail} />
          <Route
            path="/from/feed/post/detail/:post_id"
            component={FeedPostDetail}
          />
          <Route path="/create/post" component={CreatePost} />
          <Route path="/add/image" component={AddImages} />
        </Switch>
      </main>
    </div>
  )
}

export default connect(state, action)(App)
