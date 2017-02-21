import React,{Component} from 'react'
import {hashHistory} from 'react-router'
import style from '../css/topfixed.css'

class TopFixed extends Component{
    render(){
        return (
            <div className={style.topFixed}>
                <span className={style.backBtn} onClick={function(){hashHistory.goBack()}}></span>
                {this.props.children}
            </div>
        )
    }
}

export default TopFixed;