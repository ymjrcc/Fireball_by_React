import React,{Component} from 'react'
import {Link} from 'react-router'
import TopFixed from './TopFixed'

class MyLikes extends Component{

    componentDidMount(){
        document.body.scrollTop=0;
    }

    render(){
        return (
            <div>
                <TopFixed>我的喜欢</TopFixed>
            </div>
        )
    }
}

export  default MyLikes;