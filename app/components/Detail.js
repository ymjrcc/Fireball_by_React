import React,{Component} from 'react'
import style from '../css/detail.css'
import {hashHistory} from 'react-router'

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
    render(){
        return (
            <div className={style.detailMain}>
楼上有个提到eneloop的彩虹电池然后一副矫情模样的顺便还在回答里假装纠结自己这是不是矫情的懒得艾特姓名的哥们，我想说，没错你这就是矫情，矫情的跟个姑娘似的，矫情得让我看完你的答案就浑身难受。
<br/>
小米所推出的一系列生活上的小产品，从来都不是面向所谓的geek的，他们只是为普通大众消费者提供了更多的消费选择，并且一直是优质低价的（相比同价位）所以最烦这些所谓geek以一副站在行业最高点的姿态对平民产品评头论足，指指点点。本来也不是卖给你的玩意儿咋那么多废话呢。
<br/>
有谁看过米其林三星大厨会对早餐摊子的包子说"看了他包子，这让我一整天都不太舒服，因为他让我想到了克里斯丁的蛋糕，并且你们看，长的是不是很像"…呵呵你一脸…
<br/>
作者：Dr.Waltson<br/>
链接：https://www.zhihu.com/question/36980488/answer/69987224<br/>
来源：知乎<br/>
著作权归作者所有，转载请联系作者获得授权。
            </div>
        )
    }
}

class DetailBottom extends Component{
    render(){
        return (
            <div className={style.detailBottom}>
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

    handleClick(){
        hashHistory.goBack();
    }

    render(){
        return (
            <span 
                className={style.bottomItem}
                onClick={this.handleClick.bind(this)}
            >
                返回
            </span>
        )
    }
}

class ToBuyBtn extends Component{
    render(){
        return (
            <button className={style.toBuyBtn}>￥ 28 购买 ></button>
        )
    }
}

class Detail extends Component{
    render(){
        return (
            <div className={style.detailBox}>
                <DetailTop />
                <DetailMain />
                <DetailBottom />
            </div>
        )
    }
}

export default Detail;