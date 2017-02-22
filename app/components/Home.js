import React,{Component} from 'react'
import {Link} from 'react-router'
import BottomTab from './BottomTab'
import style from '../css/home.css'
import productsData from '../data/productsData.json'

class HomeTop extends Component{
    render(){
        return <div data-maxwidth className={style.homeTop}>今日推荐</div>
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
            <Link to={ "/detail/" + this.props.id } className={style.recommendItem}>
                <div className={style.recommendImgBox}>
                    <img className={style.recommendImg} src={require('../images/covers/'+this.props.cover)} />
                </div>
                <p>
                    <span className={style.author}>{this.props.author}</span>
                    {' · '}
                    <span className={style.date}>{this.props.date}</span>
                </p>
                <h2 className={style.title}>{this.props.title}</h2>
                <div className={style.likesRow}>
                    <span className={style.likes}>{this.props.likes}</span>
                </div>
            </Link>   
        )
    }
}

class Home extends Component{

    componentDidMount(){
        document.body.scrollTop=0;
    }

    // ajax方法获取本地数据，这个路径在build模式下有效
    // componentDidMount(){
    //     function ajax(url){
    //         var xhr = new XMLHttpRequest;
    //         xhr.onload = function() {
    //             console.log(this.response);
    //         };
    //         xhr.open("get", url, true);
    //         xhr.send();
    //     }
    //     ajax("../app/data/productsData.json");
    // }

    renderRecommendBox(data){
        let dataArr = [];
        for(let i = 0; i < data.length; i++){
            dataArr.push(
                <RecommendItem 
                    key={data[i].id} 
                    id={data[i].id} 
                    cover={data[i].cover} 
                    author={data[i].author} 
                    date={data[i].date} 
                    title={data[i].title} 
                    likes={data[i].likes}
                />
            );
        }
        return dataArr;
    }

    render(){
        return (
            <div className={style.home}>
                <HomeTop />
                <RecommendBox>
                    {this.renderRecommendBox(productsData)}
                </RecommendBox>
                <BottomTab />
            </div>
        )
    }
}

export default Home;