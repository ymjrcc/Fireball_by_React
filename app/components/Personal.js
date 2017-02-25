import React,{Component} from 'react'
import {Link} from 'react-router'
import BottomTab from './BottomTab'
import SettingItem from './SettingItem'
import style from "../css/personal.css"

class HeaderInfo extends Component{
    render(){
        return (
            <div className={style.headInfo}>
                <p className={style.name}>{this.props.name}</p>
                <p className={style.desc}>
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
                <div className={style.headImg}></div>
                <HeaderInfo name="Yiming" goods="0" subscription="6" likes="3" />
            </div>
        )
    }
}

class SettingRoute extends Component{
    render(){
        return (
            <Link to={ "/personal/" + this.props.name }>
                <SettingItem name={this.props.name} title={this.props.title} />
            </Link>
        )
    }
}

class SettingBox extends Component{
    render(){
        return (
            <div className={style.settingBox}>
                <div className={style.settingArea}>
                    <SettingRoute name="order" title="我的订单" />
                    <SettingRoute name="subscription" title="我的订阅" />
                    <SettingRoute name="like" title="我的喜欢"  />
                    <SettingRoute name="coupon" title="优惠券" />
                </div>
                <div className={style.settingArea}>
                    <SettingRoute name="help" title="客服与帮助" />
                    <SettingRoute name="setting" title="设置" />
                </div>
            </div>
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
                <SettingBox />
                <BottomTab />
            </div>
        )
    }
}

export default Personal;