import React,{Component} from 'react'
import {findDOMNode} from 'react-dom'
import {Link} from 'react-router'
import BottomTab from './BottomTab'
import style from '../css/discover.css'

let DiscoverTop = ()=>(<div className={style.discoverTop}>发 现</div>);

class DiscoverTopRow extends Component{
    render(){
        return (
            <div className={style.discoverTopRow}>
                <div className={style.discoverTopItem}>本周好物排行</div>
                <div className={style.discoverTopItem}>所有买手</div>
            </div>
        )
    }
}

class DiscoverSection extends Component{
    render(){
        return (
            <div className={style.discoverSection}>
                <h3>{this.props.name}</h3>
                <p>{this.props.number + ' 篇推荐'}</p>
                <div className={style.sectionImgBox}>
                    <div className={style.sectionImg}></div>
                    <div className={style.sectionImg}></div>
                    <div className={style.sectionImg}></div>
                </div>
            </div>
        )
    }
}

class DiscoverBannerImg extends Component{

    componentDidMount(){
        var ele = findDOMNode(this);
        var left = parseInt(ele.style.left.substring(0, ele.style.left.length - 1));
        var move = 0;
        var count = 0;
        var flag = false;
        setInterval(function(){
            if(move<84 && count==0){
                move++;
                if(flag){
                    ele.setAttribute("style","left:"+(--left)+"%");
                    if(left<-50){
                        left+=336;
                        ele.setAttribute("style","left:"+left+"%");
                    }
                }
            }else{
                flag = true;
                count++;
                if(count==200){
                    count=0;
                    move=0;
                }
            }
        },20)
    }

    render(){
        return (
            <div 
                className={style.discoverBannerImg}
                data-index={this.props.index}
                style={{left: (this.props.index * 84 - 34)+"%"}}
            >
                
            </div>
        )
    }
}

class DiscoverBanner extends Component{
    render(){
        return (
            <div className={style.discoverBanner}>
                <DiscoverBannerImg index="0" />
                <DiscoverBannerImg index="1" />
                <DiscoverBannerImg index="2" />
                <DiscoverBannerImg index="3" />
            </div>
        )
    }
}

class RecommendItem extends Component{
    render(){
        return (
            <div className={style.recommendItem}>
                <div className={style.recommendItemImg}></div>
                <div className={style.recommendItemName}>{this.props.name}</div>
                <div className={style.recommendItemDesc}>{this.props.desc}</div>
                <RecommendFollowBtn />
            </div>
        )
    }
}

class RecommendFollowBtn extends Component{

    constructor(props){
        super(props);
        this.state = {
            className: "recommendFollowBtn",
            content: "关注"
        }
    }

    handleClick(){
        this.setState({
            className: this.state.className=="recommendFollowBtn"?"recommendFollowingBtn":"recommendFollowBtn",
            content: this.state.content=="关注"?"已关注":"关注"
        })
    }

    render(){
        return (
            <button 
                className={style[this.state.className]}
                onClick={this.handleClick.bind(this)}
            >
                {this.state.content}
            </button>
        )
    }
}

class RecommendSection extends Component{
    render(){
        return (
            <div className={style.recommendSection}>
                <h3>本周推荐</h3>
                <p>3个推荐买手</p>
                <div className={style.recommendItemBox}>
                    <RecommendItem name="Irena. T" desc="健身×乐趣=生活" />
                    <RecommendItem name="自然选择号" desc="李叔带你发现好东西" />
                    <RecommendItem name="盐" desc="一个盐系男子的日常" />
                </div>
            </div>
        )
    }
}

class DiscoverBox extends Component{
    render(){
        return (
            <div className={style.discoverBox}>
                <DiscoverTopRow />
                <DiscoverSection name="火球精选" number="34" />
                <DiscoverBanner />
                <DiscoverSection name="吃点儿好的" number="31" />
                <DiscoverSection name="品质生活" number="18" />
                <DiscoverSection name="新奇酷玩" number="25" />
                <DiscoverSection name="型格指南" number="34" />
                <DiscoverSection name="穿衣搭配" number="26" />
                <DiscoverSection name="礼物指南" number="13" />
                <RecommendSection />
            </div>
        )
    }
}

class Discover extends Component{
    render(){
        return (
            <div>
                <DiscoverTop />
                <DiscoverBox />
                <BottomTab />
            </div>
        )
    }
}

export default Discover;