import React,{Component} from 'react';
import {Link} from 'react-router'

class Coupons extends Component{
    render(){
        return (
            <div>
                <Link to="/">返回</Link>
                <br/>
                {'this is my Coupons.'}
            </div>
        )
    }
}

export default Coupons;