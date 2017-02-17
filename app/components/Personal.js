import React,{Component} from 'react'
import {Link} from 'react-router'
import BottomTab from './BottomTab'
import style from "../css/personal.css"

class HeaderImg extends Component{
    render(){
        return (
            <div className={style.headImg}></div>
        )
    }
}

class HeaderInfo extends Component{
    render(){
        return (
            <div className={style.headInfo}>
                <p>{this.props.name}</p>
                <p>
                    {'买到' + this.props.goods + '个好物'}
                    {' · '}
                    {this.props.subscription + '个订阅'}
                    {' · '}
                    {this.props.likes + '喜欢'}
                </p>
            </div>
        )
    }
}

class HeaderBox extends Component{
    render(){
        return (
            <div className={style.headBox}>
                <HeaderImg src="../images/pen.png" />
                <HeaderInfo name="Yiming" goods="0" subscription="12" likes="0" />
            </div>
        )
    }
}

class SettingBox extends Component{
    render(){
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

class SettingItem extends Component{
    render(){
        return (
            <Link to={this.props.to}>
                <div className={style.settingItem}>
                    {this.props.name}
                </div>
            </Link>
        )
    }
}

class Personal extends Component{
    render(){
        return (
            <div className={style.personal}>
                <HeaderBox />
                <SettingBox>
                    <SettingItem name="我的订单" to="/personal/order" />
                    <SettingItem name="我的订阅" to="/personal/subscription" />
                    <SettingItem name="我的喜欢" to="/personal/like" />
                    <SettingItem name="优惠券" to="/personal/coupon" />
                    <br/>
                    <SettingItem name="客服与帮助" to="/personal/help" />
                    <SettingItem name="设置" to="/personal/setting" />
                </SettingBox>
                <BottomTab />
            </div>
        )
    }
}

export  default Personal;