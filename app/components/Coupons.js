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
                <h2 style={{
                    position: "relative",
                    top: "200px",
                    textAlign: "center",
                    color: "#444",
                    fontStyle: "italic",
                    margin: "0"
                }}>暂无可用优惠券</h2>
            </div>
        )
    }
}

export default Coupons;