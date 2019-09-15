import React, { Component } from 'react'
import { TabBar } from 'antd-mobile'

import Main from './main/Main'  //首页
import Chat from './chat/Chat'  //微聊
import History from './history/History' //足迹
import My from './my/My'    //我的

//导航页面
export default class Nav extends Component {
    constructor() {
        super()

        this.state = {
            selectedTab: 'main',   //当前选中的标签
            iconlist: [{ title: '首页', key: 'main', icon: 'home1.png', selectedIcon: 'home.png' }, 
            { title: '微聊', key: 'chat', icon: 'talk.png', selectedIcon: 'talking.png' },
            { title: '足迹', key: 'history', icon: 'footprint.png', selectedIcon: 'footprinting.png' },
            { title: '我的', key: 'my', icon: 'my.png', selectedIcon: 'mying.png' }]
        }
    }

    render() {
        return (
            <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                <TabBar
                    unselectedTintColor="#949494" //未选中
                    tintColor="#00BC5B" //选中的
                    barTintColor="white"
                >
                    {
                        this.state.iconlist.map(obj => <TabBar.Item
                            title={obj.title}
                            key={obj.key}
                            icon={<div style={{
                                width: '22px',
                                height: '22px',
                                background: `url(${require('../../assets/imgs/' + obj.icon)}) center center /  21px 21px no-repeat`
                            }}
                            />
                            }
                            selectedIcon={<div style={{
                                width: '22px',
                                height: '22px',
                                background: `url(${require('../../assets/imgs/' + obj.selectedIcon)}) center center /  21px 21px no-repeat`
                            }}
                            />
                            }
                            selected={this.state.selectedTab === obj.key}
                            onPress={() => {
                                this.setState({
                                    selectedTab: obj.key,
                                });
                            }}
                        >
                            {this.renderContent()}
                        </TabBar.Item>)
                    }
                </TabBar>
            </div>
        );
    }


    //renderContent return出去的JSX就会作为屏幕上方的容器内容渲染出来
    renderContent() {

        //根据当前选中状态，切换屏幕上方页面
        switch(this.state.selectedTab){
            case 'main': return <Main h={this.props.history} />
            case 'chat': return <Chat/>
            case 'history': return <History/>
            case 'my': return <My h={this.props.history} />
        }
    }
}
