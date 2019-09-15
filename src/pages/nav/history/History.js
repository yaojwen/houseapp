import React, { Component } from 'react'
import { IP } from '../../../api/api'
import { connect } from 'react-redux'

class History extends Component {
    render() {
        // console.log(this.props)
        return (
            <div>
                二级页面-历史
                {
                    this.props.historyArr.map(obj => <div>
                        <img src={IP + obj.imgs} style={{ width: '150px', height: '100px' }} />
                        <label>{obj.name}</label>
                    </div>)
                }
            </div>
        )
    }
}

//如果不写过滤函数，默认所有数据都不给，只给一个dispatch函数，让你去修改store的值！
export default connect((state) => {
    //return的值才会被真正注入到当前组件中
    //所有值都会被注入到props中
    return {
        historyArr: state.historyArr
    }
})(History)