import React,{Component} from 'react';
import {Link} from 'react-router'

class MyOrders extends Component{
    render(){
        return (
            <div>
                <Link to="/">返回</Link>
                <br/>
                {'this is my order.'}
            </div>
        )
    }
}

export  default MyOrders;