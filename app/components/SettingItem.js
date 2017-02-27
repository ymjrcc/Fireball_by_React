import React,{Component} from 'react'
import {Link} from 'react-router'
import style from '../css/personal.css'

class SettingItem extends Component{
    render(){
        return (
            <div className={style.settingItem}>
                <div className={style.settingTitle}>
                    <span className={style.settingIcon + " " + style[this.props.name]}></span>
                    {this.props.title}
                </div>
                <div className={style.rightIcon}></div>
            </div>
        )
    }
}

export default SettingItem;