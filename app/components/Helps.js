import React,{Component} from 'react'
import {Link} from 'react-router'
import TopFixed from './TopFixed'

class Helps extends Component{

    componentDidMount(){
        document.body.scrollTop=0;
    }
    
    render(){
        return (
            <div>
                <TopFixed>客服与帮助</TopFixed>
            </div>
        )
    }
}

export  default Helps;