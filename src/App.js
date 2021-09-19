import React from 'react'
import './App.css'
import { Switch, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'
import {
  Navbar,
  Exchanges,
  Homepage,
  Cryptocurrencies,
  CryptoDetails,
  News
} from './components'

const App = () => {
  return (
    <div className='App'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Switch>
              <Route exact path='/exchanges'>
                <Homepage />
              </Route>
              <Route exact path='/'>
                <Exchanges />
              </Route>
              <Route exact path='/cryptocurrencies'>
                <Cryptocurrencies />
              </Route>
              <Route exact path='/crypto/:coinId'>
                <CryptoDetails />
              </Route>
              <Route exact path='/news'>
                <News />
              </Route>
            </Switch>
          </div>
        </Layout>
      </div>
      <div className='footer'></div>
    </div>
  )
}

export default App
