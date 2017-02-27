import React,{Component} from 'react'
import {Link} from 'react-router'
import TopFixed from './TopFixed'
import SettingItem from './SettingItem'
import style from '../css/settings.css'

class SettingBox extends Component{
    render(){
        return (
            <div className={style.settingBox}>
                <div className={style.settingArea}>
                    <SettingItem name="clean" title="清理缓存" />
                </div>
                <div className={style.settingArea}>
                    <SettingItem name="encourage" title="鼓励一下" />
                    <SettingItem name="agreement" title="隐私和协议" />
                </div>
                <div className={style.settingArea}>
                    <SettingItem name="logout" title="退出登录" />
                </div>
            </div>
        )
    }
}

class Settings extends Component{

    componentDidMount(){
        document.body.scrollTop=0;
    }
    
    render(){
        return (
            <div>
                <TopFixed>设置</TopFixed>
                <SettingBox />
            </div>
        )
    }
}

export  default Settings;