import React,{Component} from 'react'
import {Link} from 'react-router'
import TopFixed from './TopFixed'

class MyOrders extends Component{

    componentDidMount(){
        document.body.scrollTop=0;
    }
    
    render(){
        return (
            <div>
                <TopFixed>我的订单</TopFixed>
            </div>
        )
    }
}

export  default MyOrders;