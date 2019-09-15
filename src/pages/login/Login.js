import React, { Component } from 'react'
import { Button, Flex, InputItem, WingBlank, WhiteSpace } from 'antd-mobile'
import { Link } from 'react-router-dom'

import { login } from '../../api/api' 
import './login.css'

export default class Login extends Component {

    constructor() {
        super()

        this.state = {
            acc: '',    //用户名
            pwd: '', //密码
            oldAcc:'',  //上一轮输入的用户名
            oldPwd:'',  //上一轮输入的密码
            show: 'none'    //是否显示错误提示
        }
    }

    render() {
        return (
            <div>
                <Flex justify='center'>
                    <img className='logo' src={require('../../assets/imgs/logo.png')} />
                </Flex>


                <WhiteSpace size="xl" />

                <WingBlank size='lg' >
                    {/* 用户名 */}
                    <InputItem
                        placeholder="请输入用户名"
                        clear
                        value={this.state.acc}
                        onChange={(val) => { this.setState({ acc: val }) }}
                    >
                        <div style={{ backgroundImage: `url(${require('../../assets/imgs/icon_user.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                    {/* 密码 */}
                    <InputItem
                        placeholder="请输入密码"
                        type="password"
                        clear
                        value={this.state.pwd}
                        onChange={(val) => { this.setState({ pwd: val }) }}
                    >
                        <div style={{ backgroundImage: `url(${require('../../assets/imgs/icon_pwd.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>


                    <p style={{display: this.state.show}}>用户名或密码错误</p>
                    <WhiteSpace size="md" />
                    <Button activeStyle={{backgroundColor:'#CCC'}} style={{ backgroundColor: '#00BC5B', color: '#FFF' }} onClick={ this.clickLogin.bind(this) } >登录</Button>

                    <WhiteSpace size="md" />
                    <Flex justify="between">
                        <Link to='/reg'>手机快速注册</Link>
                        <Link to='/reg'>忘记密码</Link>
                    </Flex>
                </WingBlank>

            </div>
        )
    }

    //点击登录
    clickLogin(){
        let {acc, pwd,oldAcc,oldPwd} = this.state

        //如果上一轮的用户名和密码和这一轮的一致
        if(oldAcc == acc && oldPwd == pwd) return

        console.log('发送请求')

        //保存上一轮的用户名和密码
        this.setState({
            oldAcc: acc,
            oldPwd: pwd
        })

        login(acc, pwd).then(msg => {
            console.log('收到响应')

            if(msg.data == 'ok'){
                //持久保存用户名
                localStorage.setItem('username',acc )

                //成功
                this.props.history.push('/')      
            }else{
                //失败提示错误信息
                this.setState({
                    show: 'block'
                })
            }
        })

    }

}
