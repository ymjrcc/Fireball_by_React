import React,{Component} from 'react'
import {Link} from 'react-router'
import BottomTab from './BottomTab'
import style from '../css/home.css'

class HomeTop extends Component{
    render(){
        return <div className={style.homeTop}>今日推荐</div>
    }
}

class RecommendBox extends Component{
    render(){
        return <div className={style.recommendBox}>{this.props.children}</div>
    }
}

class RecommendItem extends Component{
    render(){
        return (
            <div className={style.recommendItem}>
                <div className={style.recommendImg}></div>
                <p>
                    <span className={style.author}>{this.props.author}</span>
                    {' · '}
                    <span className={style.time}>{this.props.time}</span>
                </p>
                <h2 className={style.title}>{this.props.title}</h2>
            </div>
        )
    }
}

class Home extends Component{

    componentDidMount(){
        function ajax(url){
            var xhr = new XMLHttpRequest;
            xhr.onload = function() {
                console.log(this.response);
            };
            xhr.open("get", url, true);
            xhr.send();
        }
        ajax("../app/data/homeData.json");
    }

    render(){
        return (
            <div>
                <HomeTop />
                <RecommendBox>
                    <RecommendItem author="Yiming" time="today" title="今天开始好好学习" />
                    <RecommendItem author="ChrisLee" time="today" title="野蛮生长" />
                    <RecommendItem author="XY" time="today" title="我要发论文" />
                    <RecommendItem author="头条新闻" time="today" title="明天有雾霾" />
                </RecommendBox>
                <BottomTab />
            </div>
        )
    }
}

export default Home;