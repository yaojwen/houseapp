import React, { Component } from 'react'
import { connect } from 'react-redux'

class Chat extends Component {
    render() {
        return (
            <div>
                二级页面-微聊
                <h1 onClick={ this.clickT.bind(this) }>{ this.props.test }</h1>
            </div>
        )
    }

    clickT(){
        this.props.dispatch({
            type: 'changetest',
            newname: '班长'
        })
    }
}
export default connect((state) => {
    return {
        test: state.test
    }
})(Chat)