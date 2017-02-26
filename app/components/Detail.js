import React,{Component} from 'react'
import {hashHistory,Link} from 'react-router'
import style from '../css/detail.css'
import Modal from './Modal'
import productsData from '../data/productsData.json'

class DetailTop extends Component{
    render(){
        const res = this.props.productInfo;
        return (
            <Link to={"/buyer/"+res.authorId} className={style.detailTop}>
                <div className={style.topHeadImg}></div>
                <div className={style.topMain}>
                    <div className={style.topAuthor}>{res.author}</div>
                    <div className={style.topDate}>{res.date}</div>
                    <div className={style.topToAutor}></div>
                </div>
            </Link>
        )
    }
}

class DetailMain extends Component{
    render(){
        const res = this.props.productInfo;
        return (
            <div className={style.detailMain}>
                <div className={style.coverBox}>
                    <img src={require('../images/covers/'+res.cover)} />
                </div>
                <h4 className={style.title}>
                    {res.title}
                </h4>
                <p className={style.text}>
                    {res.text}
                </p>
            </div>
        )
    }
}

class DetailFooter1 extends Component{
    render(){
        const res = this.props.productInfo;
        return (
            <div className={style.footer1Box}>
                <div className={style.footer1Item}>{res.likes}人喜欢</div>
                <div className={style.footer1Item}>{res.share}人告诉朋友</div>
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
                <p className={style.ans}>多仓直发：每个买手有多个合作商家，发货地点根据商家不同而改变。</p>
                <p className={style.que}>什么时候发货？</p>
                <p className={style.ans}>请参考商品详情页底部标注的“预计发货时间”。预售商品及海外代购商品发货时间会有相应延长。</p>
                <p className={style.que}>如何办理退/换货？</p>
                <p className={style.ans}>1.非特殊商品自收到之日起7天内，可办理退换货服务，涉及退款将原路返回，预计1-7个工作日到账；商品详情页底部标注的特殊商品暂不支持退货。<br/>2.在“我的订单”页面，选择需要退/换货的订单，找到底部“退/换货”按钮申请售后。</p>
                <p className={style.que}>退换货运费谁承担？</p>
                <p className={style.ans}>因火球买手商品问题产生的退换货，运费由相应买手店承担，寄出运费需要顾客先行垫付，商家收到货物后，退回顾客寄出费用；因顾客个人原因产生的退换货，购买和寄回运费由顾客个人承担。</p>
            </div>
        )
    }
}

class DetailFooter extends Component{
    render(){
        const res = this.props.productInfo;
        return (
            <div className={style.detailFooter}>
                <DetailFooter1 productInfo={res} />
                <DetailFooter2 />
                <DetailFooter3 />
                <DetailFooter4 />
            </div>
        )
    }
}

class DetailBottom extends Component{

    constructor(props){
        super(props);
        this.state={
            liked: this.props.productInfo.liked,
            share: false
        }
    }

    handleLike(){
        this.setState({liked:!this.state.liked});
    }

    handleShare(){
        this.setState({share:!this.state.share});
    }

    handleCancel(value){
        this.setState({share:value});
    }

    render(){
        const res = this.props.productInfo;
        return (
            <div data-maxwidth className={style.detailBottom}>
                <div className={style.bottomLeft}>
                    <GoBackBtn />
                    <span className={style.bottomItem} onClick={this.handleLike.bind(this)}>
                        <div className={this.state.liked?style.liked:style.like}></div>
                        {res.likes>999?((res.likes/1000).toFixed(1)+"k"):res.likes}
                    </span>
                    <span className={style.bottomItem} onClick={this.handleCancel.bind(this)}>
                        <div className={style.share}></div>
                        {res.share>999?((res.share/1000.0).toFixed(1)+"k"):res.share}
                    </span>
                </div>
                <div className={style.bottomRight}>
                    <ToBuyBtn productInfo={res} />
                </div>
                <ShareAlert show={this.state.share} handleCancel={this.handleCancel.bind(this)}/>                
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
                <div className={style.back}></div>
            </span>
        )
    }
}

class ToBuyBtn extends Component{
    render(){
        const res = this.props.productInfo;
        return (
            <div className={style.toBuyBtn}>￥ {res.price} 购买 </div>
        )
    }
}

class ShareAlert extends Component{

    handleCancel(){
        this.props.handleCancel(false);
    }

    render(){
        let display = this.props.show?"block":"none";
        return(
            <div className={style.shareAlert} style={{display:display}}>
                <div className={style.shareInfo}>每邀请一位好友下单，即得10元无门槛红包</div>
                <div className={style.shareBox}>
                    <div className={style.shareWay}>
                        <div className={style.shareItem} data-name="weixin"></div>
                        <div className={style.shareText}>微信好友</div>
                    </div>
                    <div className={style.shareWay}>
                        <div className={style.shareItem} data-name="moments"></div>
                        <div className={style.shareText}>朋友圈</div>
                    </div>
                    <div className={style.shareWay}>
                        <div className={style.shareItem} data-name="weibo"></div>
                        <div className={style.shareText}>微博</div>
                    </div>
                    <div className={style.shareWay}>
                        <div className={style.shareItem} data-name="copy"></div>
                        <div className={style.shareText}>复制链接</div>
                    </div>
                </div>
                <div className={style.shareCancel} onClick={this.handleCancel.bind(this)}>取消</div>
            </div>
        )
    }
}

class Detail extends Component{

    componentDidMount(){
        document.body.scrollTop=0;
    }

    getProductInfo(data){
        let id = location.hash.split("/").pop();
        let productObj = {id:"__WARNING__"};
        for(let i = 0; i < data.length; i++){
            if(data[i].id === id){
                productObj = data[i];
                break;
            }
        }
        return productObj;
    }

    render(){
        const productInfo = this.getProductInfo(productsData);
        if(productInfo.id=="__WARNING__"){
            setTimeout(function(){location.hash="#/"},2000);
            return <div>找不到资源！</div>
        }else{
            return (
                <div className={style.detailBox}>
                    <DetailTop productInfo={productInfo} />
                    <DetailMain productInfo={productInfo} />
                    <DetailFooter productInfo={productInfo} />
                    <DetailBottom productInfo={productInfo} />
                </div>
            )
        }
        
    }
}

export default Detail;