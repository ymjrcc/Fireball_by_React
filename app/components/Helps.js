import React,{Component} from 'react'
import {Link} from 'react-router'
import TopFixed from './TopFixed'
import style from '../css/helps.css'

class HelpsBox extends Component{
    render(){
        return (
            <div className={style.helpsBox}>
                <div className={style.selfTit}>
                    自助服务
                </div>
                <div className={style.selfBox}>
                    <div className={style.selfItem}>提醒发货</div>
                    <div className={style.selfItem}>订单问题</div>
                    <div className={style.selfItem}>在线客服</div>
                </div>
            </div>
        )
    }
}

class QueItem extends Component{

    handleClick(){
        this.props.toggleAns(this.props.q);
    }

    render(){
        return (
            <div className={style.queItem} onClick={this.handleClick.bind(this)}>
                {this.props.children}
                <div className={(this.props.show?style.arrowUp:style.arrowDown) + " " + style.arrow}></div>
            </div>
        )
    }
}

class AnsItem extends Component{
    render(){
        let res = this.props.show?"block":"none";
        return (
            <div className={style.ansItem} style={{display: res}}>{this.props.children}</div>
        )
    }
}

class Questions extends Component{

    constructor(props){
        super(props);
        this.state = {
            a0: false,
            a1: false,
            a2: false,
            a3: false,
            a4: false
        }
    }

    toggleAns(index){
        let res = !this.state["a"+index];
        this.setState(
            Object.assign({
                a0: false,
                a1: false,
                a2: false,
                a3: false,
                a4: false
            },
            {
                ["a"+index]: res
            })
        )
    }

    render(){
        return (
            <div className={style.questions}>
                <div className={style.queTit}>常见问题</div>

                <QueItem q="0" show={this.state.a0} toggleAns={this.toggleAns.bind(this)}>火球的商品从哪里发货？</QueItem>             
                <AnsItem a="0" show={this.state.a0}>
                    多仓直发：每个买手有多个合作商家，发货地点根据商家不同而改变。
                </AnsItem>

                <QueItem q="1" show={this.state.a1} toggleAns={this.toggleAns.bind(this)}>如何修改地址/电话？</QueItem>
                <AnsItem a="1" show={this.state.a1}>
                    快递公司的系统不支持修改收货地址和电话，建议您找朋友或家人代收。若有特殊情况，请联系在线客服。
                </AnsItem>

                <QueItem q="2" show={this.state.a2} toggleAns={this.toggleAns.bind(this)}>什么时候发货？</QueItem>
                <AnsItem a="2" show={this.state.a2}>
                    可参考商品详情页底部标注的预计发货时间。预售商品及海外代购商品发货时间会有相应延长。
                </AnsItem>

                <QueItem q="3" show={this.state.a3} toggleAns={this.toggleAns.bind(this)}>如何办理退换货？</QueItem>
                <AnsItem a="3" show={this.state.a3}>
                    在“我的订单”页面，选择需要退/换货的订单，找到底部“退/换货”按钮申请售后。收货7天后的订单无法再发起售后。
                </AnsItem>
                
                <QueItem q="4" show={this.state.a4} toggleAns={this.toggleAns.bind(this)}>退款多久可以收到？</QueItem>
                <AnsItem a="4" show={this.state.a4}>
                    退款会在商家收到寄回商品后的1-7个工作日内退回原支付账户。
                </AnsItem>
            </div>
        )
    }
}

class Helps extends Component{

    componentDidMount(){
        document.body.scrollTop=0;
    }
    
    render(){
        return (
            <div>
                <TopFixed>客服与帮助</TopFixed>
                <HelpsBox />
                <Questions />
            </div>
        )
    }
}

export  default Helps;