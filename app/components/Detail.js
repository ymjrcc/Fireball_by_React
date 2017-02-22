import React,{Component} from 'react'
import style from '../css/detail.css'
import {hashHistory} from 'react-router'
import detailData from '../data/homeData.json'

class DetailTop extends Component{
    render(){
        return (
            <div className={style.detailTop}>
                <div className={style.topHeadImg}></div>
                <div className={style.topMain}>
                    <div>爱生活的马克君</div>
                    <div>6小时前</div>
                </div>
            </div>
        )
    }
}

class DetailMain extends Component{

    renderDetail(data){
        let id = location.hash.split("/").pop();
        let text = {title:"WARNING",text: "未找到对应的文章！"};
        if(data[id] && typeof data[id].text=="string"){
            text = data[id];
        }
        return text;
    }

    render(){
        return (
            <div className={style.detailMain}>
                <h4 style={{textAlign:"center"}}>
                    {this.renderDetail(detailData).title}
                </h4>
                <p>
                    {this.renderDetail(detailData).text}
                </p>
            </div>
        )
    }
}

class DetailFooter1 extends Component{
    render(){
        return (
            <div className={style.footer1Box}>
                <div className={style.footer1Item}>1026人喜欢</div>
                <div className={style.footer1Item}>86人告诉朋友</div>
            </div>
        )
    }
}

class DetailFooter2 extends Component{
    render(){
        return (
            <div className={style.footer2Box}>
                限时分享奖励
            </div>
        )
    }
}

class DetailFooter3 extends Component{
    render(){
        return (
            <div className={style.footer3Box}>
                <div className={style.footer3Title}>此商品</div>
                <div className={style.footer3Div}>
                    <div className={style.footer3Item}>3个工作日发货</div>
                    <div className={style.footer3Item}>正品保障</div>
                    <div className={style.footer3Item}>无忧退货</div>
                </div>
            </div>
        )
    }
}

class DetailFooter4 extends Component{
    render(){
        return (
            <div className={style.footer4Box}>
                <div className={style.footer4Title}>常见问题</div>
                <p className={style.que}>火球买手的商品从哪里发货？</p>
                <p className={style.ans}>多仓直发，每个买手有多个合作商家。</p>
                <p className={style.que}>火球买手的商品从哪里发货？</p>
                <p className={style.ans}>多仓直发，每个买手有多个合作商家。</p>
                <p className={style.que}>火球买手的商品从哪里发货？</p>
                <p className={style.ans}>多仓直发，每个买手有多个合作商家。</p>
                <p className={style.que}>火球买手的商品从哪里发货？</p>
                <p className={style.ans}>多仓直发，每个买手有多个合作商家。</p>
            </div>
        )
    }
}

class DetailFooter extends Component{
    render(){
        return (
            <div className={style.detailFooter}>
                <DetailFooter1 />
                <DetailFooter2 />
                <DetailFooter3 />
                <DetailFooter4 />
            </div>
        )
    }
}

class DetailBottom extends Component{
    render(){
        return (
            <div data-maxwidth className={style.detailBottom}>
                <div className={style.bottomLeft}>
                    <GoBackBtn />
                    <span className={style.bottomItem}>喜欢</span>
                    <span className={style.bottomItem}>分享</span>
                </div>
                <div className={style.bottomRight}>
                    <ToBuyBtn />
                </div>
            </div>
        )
    }
}

class GoBackBtn extends Component{

    render(){
        return (
            <span 
                className={style.bottomItem}
                onClick={function(){hashHistory.goBack();}}
            >
                返回
            </span>
        )
    }
}

class ToBuyBtn extends Component{
    render(){
        return (
            <div className={style.toBuyBtn}>￥ 28 购买 ></div>
        )
    }
}

class Detail extends Component{

    componentDidMount(){
        document.body.scrollTop=0;
    }

    render(){
        return (
            <div className={style.detailBox}>
                <DetailTop />
                <DetailMain />
                <DetailFooter />
                <DetailBottom />
            </div>
        )
    }
}

export default Detail;