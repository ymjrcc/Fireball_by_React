import React,{Component} from 'react'
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

class DiscoverBanner extends Component{
    render(){
        return (
            <div className={style.discoverBanner}>
                <div className={style.discoverBannerImg}></div>
                <div className={style.discoverBannerImg}></div>
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
    render(){
        return (
            <button className={style.recommendFollowBtn}>关注</button>
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