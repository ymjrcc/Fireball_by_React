import React,{Component} from 'react'
import {Link} from 'react-router'
import TopFixed from './TopFixed'

class Settings extends Component{

    componentDidMount(){
        document.body.scrollTop=0;
    }
    
    render(){
        return (
            <div>
                <TopFixed>设置</TopFixed>
            </div>
        )
    }
}

export  default Settings;