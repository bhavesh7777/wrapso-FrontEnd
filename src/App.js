import React from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './pages/login/login.component'
import Home from './pages/home/home.component'
import withLayout from './component/header/withLayout/withLayout.component'
import ItemCollection from './pages/itemCollection/itemCollection.component'
import Orders from './pages/orders/orders.component'
import Cart from './pages/cart/cart.component'

const HomeWithLayout = withLayout(Home)
const itemCollectionWithLayout = withLayout(ItemCollection)
const ordersWithLayout = withLayout(Orders)
const cartWithLayout = withLayout(Cart)
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} exact />
          <Route path="/" component={HomeWithLayout} exact />
          <Route path="/itemCollection" component={itemCollectionWithLayout} />
          <Route path="/orders" component={ordersWithLayout} exact />
          <Route path="/cart" component={cartWithLayout} exact />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
