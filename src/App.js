import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'

import Nav from './pages/nav/Nav'   //导航（主要页面）
import Login from './pages/login/Login' //登录
import Reg from './pages/reg/Reg'   //注册
import Error404 from './pages/error404/Error404'    //容错页面
import SelectCity from './pages/selectcity/SelectCity'  //选择城市
import MyMap from './pages/map/Map'  //地图
import Search from './pages/search/Search'  //搜索页面

// 入口组件
export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                {/* // 路由器：就是路由出口，组件的切换都在此容器中进行 */}
                <HashRouter>
                    {/* 选择器，匹配下面的Route，只要匹配成功1个，就会返回！！性能高 */}
                    {/* exact：精准匹配，加了以后就不在是模糊匹配 */}
                    <Switch>
                        <Route path='/' exact component={Nav} />
                        <Route path='/login' component={Login} />
                        <Route path='/reg' component={Reg} />
                        <Route path='/selectcity' component={SelectCity} />
                        <Route path='/map' component={MyMap} />
                        <Route path='/search' component={Search} />

                        {/* 只要不写path就会作为default使用 默认路由 */}
                        <Route component={Error404} />
                    </Switch>
                </HashRouter>
            </Provider>
        )
    }
}


