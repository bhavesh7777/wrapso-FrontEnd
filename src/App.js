import React from 'react'
import './App.css'
import Login from './pages/login/login.component'
import Home from './pages/home/home.component'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import withLayout from './component/header/withLayout/withLayout.component'

const HomeWithLayout = withLayout(Home)
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} exact />
          <Route path="/" component={HomeWithLayout} exact />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
