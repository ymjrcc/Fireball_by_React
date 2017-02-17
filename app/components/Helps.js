import React,{Component} from 'react';
import {Link} from 'react-router'

class Helps extends Component{
    render(){
        return (
            <div>
                <Link to="/">返回</Link>
                <br/>
                {'this is my Helps.'}
            </div>
        )
    }
}

export  default Helps;