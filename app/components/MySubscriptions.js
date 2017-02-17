import React,{Component} from 'react';
import {Link} from 'react-router'

class MySubscriptions extends Component{
    render(){
        return (
            <div>
                <Link to="/">返回</Link>
                <br/>
                {'this is my MySubscriptions.'}
            </div>
        )
    }
}

export  default MySubscriptions;