import React,{Component} from 'react'
import {Link} from 'react-router'
import TopFixed from './TopFixed'

class Coupons extends Component{

    componentDidMount(){
        document.body.scrollTop=0;
    }

    render(){
        return (
            <div>
                <TopFixed>优惠券</TopFixed>
            </div>
        )
    }
}

export default Coupons;