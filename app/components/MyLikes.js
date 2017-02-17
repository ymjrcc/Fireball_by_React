import React,{Component} from 'react';
import {Link} from 'react-router'

class MyLikes extends Component{
    render(){
        return (
            <div>
                <Link to="/">返回</Link>
                <br/>
                {'this is my MyLikes.'}
            </div>
        )
    }
}

export  default MyLikes;