import React, { Component } from 'react'
import { Carousel, Grid, Toast } from 'antd-mobile'
import { connect } from 'react-redux'
import { gethouselist, IP } from '../../../api/api'

import './main.css'

class Main extends Component {
    constructor() {
        super()

        this.state = {
            data: [{ img: '', hash: '' }],
            imgHeight: 176,
            iconlist: [{ i: 'icon01.png', t: '新房' },
            { i: 'icon02.png', t: '二手房' },
            { i: 'icon03.png', t: '租房' },
            { i: 'icon04.png', t: '商铺' },
            { i: 'icon05.png', t: '海外房产' },
            { i: 'icon06.png', t: '卖房' },
            { i: 'icon07.png', t: '问答' },
            { i: 'icon08.png', t: '小区房价' }].map((obj) => {
                return { icon: require('../../../assets/imgs/' + obj.i), text: obj.t }
            }),
            iconlist2: [{ i: 'icon01.png', t: '我要贷款' },
            { i: 'icon01.png', t: '房贷计算' },
            { i: 'icon01.png', t: '知识' },
            { i: 'icon01.png', t: '扫一扫' }].map(obj => {
                return { icon: require('../../../assets/imgs/' + obj.i), text: obj.t }
            }),
            city: '定位中',
            houselist: []   //猜你喜欢数组

        }
    }

    render() {
        return (
            <div>
                {/* 导航条 */}
                <div className='top-search'>
                    <label onClick={this.changeHash.bind(this, '/selectcity')}>{this.state.city}▼</label>
                    <div className='search-div' onClick={this.changeHash.bind(this, '/search')}>
                        <img src={require('../../../assets/imgs/icon_search.png')} />
                        <label>搜索房源就点我</label>
                    </div>
                    <img onClick={this.changeHash.bind(this, '/map')} src={require('../../../assets/imgs/icon_map.png')} />
                </div>

                {/* 轮播 */}
                <Carousel
                    autoplay
                    infinite
                >
                    {this.state.data.map(obj => (
                        <a
                            key={obj.img}
                            href={obj.hash}
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                            <img
                                src={`https://zos.alipayobjects.com/rmsportal/${obj.img}.png`}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </a>
                    ))}
                </Carousel>

                {/* 宫格 */}
                <Grid hasLine={false} data={this.state.iconlist} activeStyle={false} />
                {/* 宫格2 */}
                <h3>房产全百科</h3>
                <Grid data={this.state.iconlist2} activeStyle={false} />


                {/* 猜你喜欢 */}
                <h1>猜你喜欢</h1>
                <div>
                    {
                        this.state.houselist.map(obj => <div onClick={this.clickHouse.bind(this, obj)}>
                            <img src={IP + obj.imgs} style={{width: '150px',height: '100px'}} />
                            <label>{ obj.name }</label>
                        </div>)
                    }
                </div>


            </div>
        )
    }

    //点击猜你喜欢的房产数据，记录到足迹中
    clickHouse(obj){
        Toast.offline('您浏览了' + obj.name + '房源');


        this.props.dispatch({
            type: 'addHistoryList',
            obj
        })
    }

    changeHash(hash) {
        //JS跳转
        this.props.h.push(hash)
    }


    async componentDidMount() {

        let _this = this
        // //绘制地图
        // let mymap = new window.AMap.Map('mymap',{       
        //     resizeEnable: true,
        //     center: [116.397428, 39.90923],
        //     zoom: 5
        // })


        //获取城市定位
        //实例化城市查询类
        var citysearch = new window.AMap.CitySearch();
        //自动获取用户IP，返回当前城市
        citysearch.getLocalCity(function (status, result) {
            if (status === 'complete' && result.info === 'OK') {
                if (result && result.city && result.bounds) {
                    var cityinfo = result.city; //当前城市信息
                    var citybounds = result.bounds; //当前城市坐标
                    // document.getElementById('info').innerHTML = '您当前所在城市：' + cityinfo;
                    _this.setState({
                        city: cityinfo
                    })

                    //地图显示当前城市
                    // mymap.setBounds(citybounds);
                }
            } else {
                // document.getElementById('info').innerHTML = result.info;
                console.log(result.info)
            }
        });

        setTimeout(() => {
            this.setState({
                data: [{ img: 'AiyWuByWklrrUDlFignR', hash: '#/reg' },
                { img: 'TekJlZRVCjLFexlOCuWn', hash: '#/map' },
                { img: 'IJOtIlfsYdTyaDTRVrLI', hash: '#/search' }],
            });
        }, 500)


        //ES7
        let msg = await gethouselist()
        console.log(msg.data)
        this.setState({
            houselist: msg.data
        })

    }

}
export default connect()(Main)