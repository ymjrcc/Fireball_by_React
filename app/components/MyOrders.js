import React,{Component} from 'react'
import {Link} from 'react-router'
import TopFixed from './TopFixed'
import style from '../css/myOrders.css'

class OrdersBox extends Component{
    render(){
        return (
            <div className={style.ordersBox}>
                <Order />
            </div>
        )
    }
}

class Order extends Component{
    render(){
        return (
            <div className={style.order}>
                <div className={style.orderInfoBox}>
                    <div className={style.orderImg}></div>
                    <div className={style.orderInfo}>
                        <div className={style.orderTitle}>ILLUMINATOR|玩极致 爱生活 够洒脱</div>
                        <div className={style.orderDesc}>规格：灰色地图（橡胶带） ×1</div>
                        <div className={style.orderPrice}>总额：<span> 310.00 </span>元</div>
                    </div>  
                </div>
                <div className={style.orderStatus}>已取消</div>
            </div>
        )
    }
}

class MyOrders extends Component{

    componentDidMount(){
        document.body.scrollTop=0;
    }
    
    render(){
        return (
            <div>
                <TopFixed>我的订单</TopFixed>
                <OrdersBox />
            </div>
        )
    }
}

export  default MyOrders;