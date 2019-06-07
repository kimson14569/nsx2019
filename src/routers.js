import React from 'react'
import {Switch, Route} from 'react-router-dom'
import HomePagaes from './pages/home/home'
import ProductsPagaes from './pages/products/products'
import FarmsPagaes from './pages/farms/farms'
import ProductDetail from './pages/products/detail/detail'
import LoginPages from './pages/login/login'
import Auth from './components/auth/auth-components'

const MainRouter = () => (
    <main>
        <Switch>
            <Route exact path='/' render={
                () => (
                    <Auth orRedirectTo='/login' orRender={
                        <HomePagaes></HomePagaes>
                    }></Auth>
                )
            }></Route>
            <Route path='/home' component={HomePagaes}></Route>
            <Route path='/products' component={ProductsPagaes}></Route>
            <Route path='/product/:id' component={ProductDetail}></Route>
            <Route path='/farms' component={FarmsPagaes}></Route>
            <Route path='/login' component={LoginPages}></Route>
        </Switch>
    </main>
)
export default MainRouter