import React,{Component} from 'react';
import {Link} from 'react-router'

class Settings extends Component{
    render(){
        return (
            <div>
                <Link to="/">返回</Link>
                <br/>
                {'this is my Settings.'}
            </div>
        )
    }
}

export  default Settings;