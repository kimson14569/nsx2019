import React from 'react'
import {Switch, Route} from 'react-router-dom'
import HomePagaes from './pages/home/home'
import ProductsPagaes from './pages/products/products'
import FarmsPagaes from './pages/farms/farms'

const MainRouter = () => (
    <main>
        <Switch>
            <Route exact path='/' component={HomePagaes}></Route>
            <Route path='/products' component={ProductsPagaes}></Route>
            <Route path='/farms' component={FarmsPagaes}></Route>
        </Switch>
    </main>
)
export default MainRouter