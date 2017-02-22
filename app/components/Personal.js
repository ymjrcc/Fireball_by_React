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
                    {'买到 ' + this.props.goods + ' 个好物'}
                    {' · '}
                    {this.props.subscription + ' 个订阅'}
                    {' · '}
                    {this.props.likes + ' 喜欢'}
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
            <div className={style.settingBox}>
                {this.props.children}
            </div>
        )
    }
}

class SettingItem extends Component{
    render(){
        return (
            <Link to={"/personal/" + this.props.name}>
                <div className={style.settingItem}>
                    <div className={style.settingTitle}>
                        <span className={style.settingIcon + " " + style[this.props.name]}></span>
                        {this.props.title}
                    </div>
                    <div className={style.rightIcon}></div>
                </div>
            </Link>
        )
    }
}

class Personal extends Component{

    componentDidMount(){
        document.body.scrollTop=0;
    }

    render(){
        return (
            <div className={style.personal}>
                <HeaderBox />
                <SettingBox>
                    <div className={style.settingArea}>
                        <SettingItem name="order" title="我的订单" />
                        <SettingItem name="subscription" title="我的订阅" />
                        <SettingItem name="like" title="我的喜欢"  />
                        <SettingItem name="coupon" title="优惠券" />
                    </div>
                    <div className={style.settingArea}>
                        <SettingItem name="help" title="客服与帮助" />
                        <SettingItem name="setting" title="设置" />
                    </div>
                </SettingBox>
                <BottomTab />
            </div>
        )
    }
}

export default Personal;